from rest_framework import serializers
from .models import Text, SemioticSquare

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ['id', 'title', 'content']


class SemioticSquareSerializer(serializers.ModelSerializer):
    class Meta:
        model = SemioticSquare
        fields = ['id', 'opposition1_term1', 'opposition1_term2', 'opposition2_term1', 'opposition2_term2', 'neutral_term']
