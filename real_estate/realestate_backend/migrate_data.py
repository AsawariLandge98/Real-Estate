"""
SQLite → PostgreSQL Data Migration Script
Run this ONCE after setting up PostgreSQL to copy all your existing data.

Usage:
    python migrate_data.py
"""
import sqlite3
import os
import django
import sys

# Add project to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'realestate_backend.settings')

def migrate():
    # Connect to old SQLite DB
    sqlite_path = os.path.join(os.path.dirname(__file__), 'db.sqlite3')
    if not os.path.exists(sqlite_path):
        print("❌ db.sqlite3 not found. Skipping migration.")
        return

    conn = sqlite3.connect(sqlite_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # Setup Django
    django.setup()
    from django.contrib.auth.models import User
    from core.models import Property, Inquiry

    print("🔄 Migrating data from SQLite → PostgreSQL...\n")

    # --- Properties ---
    cur.execute("SELECT * FROM core_property")
    props = cur.fetchall()
    imported_props = 0
    for row in props:
        if not Property.objects.filter(property_id=row['property_id']).exists():
            import json
            Property.objects.create(
                property_id=row['property_id'],
                title=row['title'],
                locality=row['locality'],
                description=row['description'] or '',
                purpose=row['purpose'],
                category=row['category'],
                property_type=row['property_type'],
                status=row['status'],
                price=row['price'],
                price_label=row['price_label'] or '',
                price_period=row['price_period'] or '',
                bhk=row['bhk'],
                area=row['area'],
                floor=row['floor'] or '',
                facing=row['facing'] or '',
                furnishing=row['furnishing'] or '',
                parking=row['parking'] or 0,
                age=row['age'] or '',
                image=row['image'] or '',
                gallery=json.loads(row['gallery']) if row['gallery'] else [],
                badges=json.loads(row['badges']) if row['badges'] else [],
                amenities=json.loads(row['amenities']) if row['amenities'] else [],
                featured=bool(row['featured']),
                consultant_name=row['consultant_name'] or '',
                consultant_title=row['consultant_title'] or '',
                consultant_initials=row['consultant_initials'] or '',
            )
            imported_props += 1
    print(f"✅ Properties: {imported_props} imported ({len(props)} total in SQLite)")

    # --- Inquiries ---
    cur.execute("SELECT * FROM core_inquiry")
    inqs = cur.fetchall()
    imported_inqs = 0
    for row in inqs:
        prop = None
        if row['property_id']:
            try:
                cur2 = conn.cursor()
                cur2.execute("SELECT property_id FROM core_property WHERE id=?", (row['property_id'],))
                p_row = cur2.fetchone()
                if p_row:
                    prop = Property.objects.filter(property_id=p_row[0]).first()
            except Exception:
                pass
        Inquiry.objects.create(
            name=row['name'],
            email=row['email'],
            phone=row['phone'] or '',
            message=row['message'] or '',
            property=prop,
            property_ref=row['property_ref'] or '',
            status=row['status'],
            source=row['source'],
            notes=row['notes'] or '',
        )
        imported_inqs += 1
    print(f"✅ Inquiries: {imported_inqs} imported ({len(inqs)} total in SQLite)")

    # --- Admin User ---
    cur.execute("SELECT * FROM auth_user WHERE is_superuser=1")
    users = cur.fetchall()
    for u in users:
        if not User.objects.filter(username=u['username']).exists():
            user = User(
                username=u['username'],
                email=u['email'],
                is_superuser=bool(u['is_superuser']),
                is_staff=bool(u['is_staff']),
                is_active=bool(u['is_active']),
            )
            user.password = u['password']  # already hashed
            user.save()
            print(f"✅ Admin user '{u['username']}' imported (password same rehega)")

    conn.close()
    print("\n🎉 Migration complete!")

if __name__ == '__main__':
    migrate()