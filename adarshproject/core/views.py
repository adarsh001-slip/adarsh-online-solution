from django.shortcuts import render
from .models import ScholarshipApplication


def home(request):
    return render(request, "index.html")


def scholarship(request):

    if request.method == "POST":

        application = ScholarshipApplication(
            student_name=request.POST.get("student_name"),
            father_name=request.POST.get("father_name"),
            mother_name=request.POST.get("mother_name"),
            mobile=request.POST.get("mobile"),
            email=request.POST.get("email"),
            date_of_birth=request.POST.get("date_of_birth"),
            category=request.POST.get("category"),
            course_class=request.POST.get("course_class"),
            school_college=request.POST.get("school_college"),
            university_board=request.POST.get("university_board"),
            address=request.POST.get("address"),
            district=request.POST.get("district"),
            state=request.POST.get("state"),
        )

        application.save()

        return render(
            request,
            "scholarship_success.html",
            {
                "application": application
            }
        )

    return render(request, "scholarship.html")


def track_scholarship(request):

    application = None
    searched = False

    if request.method == "POST":

        application_number = request.POST.get(
            "application_number",
            ""
        ).strip().upper()

        searched = True

        try:
            application = ScholarshipApplication.objects.get(
                application_number=application_number
            )

        except ScholarshipApplication.DoesNotExist:
            application = None

    return render(
        request,
        "track_scholarship.html",
        {
            "application": application,
            "searched": searched,
        }
    )