# movie_recommendation/urls.py
from django.urls import path
from .views import SampleAPIView

urlpatterns = [
    path('api/sample', SampleAPIView.as_view(), name='sample_api'),
]
