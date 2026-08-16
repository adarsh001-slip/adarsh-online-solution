from django.contrib import admin
from .models import ScholarshipApplication


@admin.register(ScholarshipApplication)
class ScholarshipApplicationAdmin(admin.ModelAdmin):

    list_display = (
        "application_number",
        "student_name",
        "mobile",
        "category",
        "course_class",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "category",
        "created_at",
    )

    search_fields = (
        "application_number",
        "student_name",
        "mobile",
    )

    readonly_fields = (
        "application_number",
        "created_at",
        "updated_at",
    )