# serializers.py
from rest_framework import serializers
from .models import Text, SemioticSquare

class TextSerializer(serializers.ModelSerializer):
    truncated_content = serializers.SerializerMethodField()

    class Meta:
        model = Text
        fields = ['id', 'title', 'truncated_content']


class SemioticSquareSerializer(serializers.ModelSerializer):
    class Meta:
        model = SemioticSquare
        fields = ['id', 'opposition1_term1', 'opposition1_term2', 'opposition2_term1', 'opposition2_term2', 'neutral_term']
