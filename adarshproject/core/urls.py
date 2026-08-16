from django.urls import path
from . import views


urlpatterns = [

    path(
        "",
        views.home,
        name="home"
    ),

    path(
        "scholarship/",
        views.scholarship,
        name="scholarship"
    ),

    path(
        "scholarship/track/",
        views.track_scholarship,
        name="track_scholarship"
    ),

]