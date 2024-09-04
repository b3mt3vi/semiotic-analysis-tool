from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Text, SemioticSquare
from .serializers import TextSerializer, SemioticSquareSerializer

class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    def create(self, request, *args, **kwargs):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SemioticSquareViewSet(viewsets.ModelViewSet):
    queryset = SemioticSquare.objects.all()
    serializer_class = SemioticSquareSerializer

    def create(self, request, *args, **kwargs):
        serializer = SemioticSquareSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

