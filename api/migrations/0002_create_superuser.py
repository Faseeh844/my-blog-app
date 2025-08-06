from django.db import migrations
import os

def create_superuser(apps, schema_editor):
    """
    Creates a superuser using credentials from environment variables.
    """
    # Get the User model from the historical app registry
    User = apps.get_model('auth', 'User')

    try:
        # Use direct dictionary access, which will raise an error if the variable is not set
        # This is more secure as it prevents running without required secrets.
        ADMIN_USERNAME = os.environ['ADMIN_USERNAME']
        ADMIN_EMAIL = os.environ['ADMIN_EMAIL']
        ADMIN_PASSWORD = os.environ['ADMIN_PASSWORD']
    except KeyError as e:
        # Provide a helpful error message during deployment if a variable is forgotten
        raise KeyError(f"Please set the {e} environment variable on your Render service.") from e

    # Create the superuser only if a user with that username does not already exist
    if not User.objects.filter(username=ADMIN_USERNAME).exists():
        print(f"Creating superuser: {ADMIN_USERNAME}")
        User.objects.create_superuser(
            username=ADMIN_USERNAME,
            email=ADMIN_EMAIL,
            password=ADMIN_PASSWORD
        )
    else:
        print(f"Superuser '{ADMIN_USERNAME}' already exists.")


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'), # Depends on the first migration of your 'api' app
    ]

    operations = [
        # This operation runs our Python function
        migrations.RunPython(create_superuser),
    ]