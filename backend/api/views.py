from rest_framework import viewsets
from .models import Text, SemioticSquare
from .serializers import TextSerializer, SemioticSquareSerializer

class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

class SemioticSquareViewSet(viewsets.ModelViewSet):
    queryset = SemioticSquare.objects.all()
    serializer_class = SemioticSquareSerializer
