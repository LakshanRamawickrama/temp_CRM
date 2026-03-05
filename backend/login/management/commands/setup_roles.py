from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType

class Command(BaseCommand):
    help = 'Setup the User Managers group with limited permissions'

    def handle(self, *args, **options):
        group, created = Group.objects.get_or_create(name='User Managers')
        
        User = get_user_model()
        user_content_type = ContentType.objects.get_for_model(User)
        # Grant all user-related permissions (add, change, delete, view)
        permissions = Permission.objects.filter(content_type=user_content_type)
        group.permissions.set(permissions)
        
        self.stdout.write(self.style.SUCCESS('Successfully setup "User Managers" group'))
