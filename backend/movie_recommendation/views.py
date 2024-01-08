# movie_recommendation/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import MovieSerializer

class SampleAPIView(APIView):
    def get(self, request, format=None):
        movies = [
            {'title': 'Movie 1'},
            {'title': 'Movie 2'},
            {'title': 'Movie 3'}
        ]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
