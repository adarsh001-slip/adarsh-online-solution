from django.db import models


class ScholarshipApplication(models.Model):

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Under Review", "Under Review"),
        ("Approved", "Approved"),
        ("Rejected", "Rejected"),
    ]

    student_name = models.CharField(max_length=150)
    father_name = models.CharField(max_length=150)
    mother_name = models.CharField(max_length=150, blank=True)

    mobile = models.CharField(max_length=10)
    email = models.EmailField(blank=True)

    date_of_birth = models.DateField()

    category = models.CharField(max_length=50)

    course_class = models.CharField(max_length=150)
    school_college = models.CharField(max_length=200)
    university_board = models.CharField(max_length=200, blank=True)

    address = models.TextField()
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100, default="Uttar Pradesh")

    application_number = models.CharField(
        max_length=30,
        unique=True,
        blank=True
    )

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.application_number:
            import uuid
            self.application_number = (
                "AOS-SCH-" + uuid.uuid4().hex[:8].upper()
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.application_number} - {self.student_name}"