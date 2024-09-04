from rest_framework import serializers
from .models import Text, SemioticSquare

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = '__all__'

class SemioticSquareSerializer(serializers.ModelSerializer):
    class Meta:
        model = SemioticSquare
        fields = '__all__'


