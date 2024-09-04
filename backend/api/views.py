from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from .models import Text, SemioticSquare
from .serializers import TextSerializer, SemioticSquareSerializer
import spacy  # SpaCy for NLP
import pt_core_news_sm  # SpaCy Portuguese model

# Load SpaCy Portuguese NLP model
nlp = spacy.load('pt_core_news_sm')

class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    def create(self, request, *args, **kwargs):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            text_instance = serializer.save()

            # NLP processing (Tokenization, NER, etc.)
            doc = nlp(text_instance.content)
            tokens = [token.text for token in doc]
            entities = [(ent.text, ent.label_) for ent in doc.ents]

            # You could store these in the database or return them
            nlp_data = {
                "tokens": tokens,
                "entities": entities
            }

            response_data = {
                "text": serializer.data,
                "nlp_data": nlp_data
            }

            return Response(response_data, status=status.HTTP_201_CREATED)

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

def analysis_view(request):
    square = SemioticSquare.objects.first()  # Fetch the first square
    context = {
        "opposition1_term1": square.opposition1_term1,
        "opposition1_term2": square.opposition1_term2,
        "opposition2_term1": square.opposition2_term1,
        "opposition2_term2": square.opposition2_term2,
        "neutral_term": square.neutral_term
    }
    return render(request, 'analysis/analysis.html', context)
