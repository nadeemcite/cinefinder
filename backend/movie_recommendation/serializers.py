# movie_recommendation/serializers.py
from rest_framework import serializers

class MovieSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
