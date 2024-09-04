from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_list_or_404, render
from .models import Text, SemioticSquare
from .serializers import TextSerializer, SemioticSquareSerializer
import spacy

# Load SpaCy Portuguese NLP model
nlp = spacy.load('pt_core_news_sm')


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    def create(self, request, *args, **kwargs):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            text_instance = serializer.save()

            # NLP processing (Tokenization, NER, POS tagging, and Dependency parsing)
            doc = nlp(text_instance.content)

            # Extract tokens (individual words)
            tokens = [token.text for token in doc]

            # Extract named entities (NER)
            entities = [(ent.text, ent.label_) for ent in doc.ents]

            # Extract part-of-speech tagging
            pos_tags = [(token.text, token.pos_) for token in doc]

            # Extract dependency parsing (shows relationship between words)
            dependencies = [(token.text, token.dep_, token.head.text) for token in doc]

            nlp_data = {
                "tokens": tokens,
                "entities": entities,
                "pos_tags": pos_tags,
                "dependencies": dependencies
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


@api_view(['GET'])
def process_text(request, text_id):
    # Fetch the text instance using the provided ID
    text_instance = Text.objects.get(id=text_id)
    content = text_instance.content

    # Process the text using SpaCy
    doc = nlp(content)

    # Extract tokens, named entities, part-of-speech tags, and dependencies
    tokens = [token.text for token in doc]
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    pos_tags = [(token.text, token.pos_) for token in doc]
    dependencies = [(token.text, token.dep_, token.head.text) for token in doc]

    # Prepare the processed data for the response
    nlp_data = {
        "tokens": tokens,
        "entities": entities,
        "pos_tags": pos_tags,
        "dependencies": dependencies
    }

    # Return the JSON response
    return Response({"nlp_data": nlp_data})


def analysis_view(request, index):
    squares = get_list_or_404(SemioticSquare)
    
    # Ensure the index is within range
    if index < 0 or index >= len(squares):
        return render(request, '404.html')  # Handle invalid index

    square = squares[index]  # Fetch the square by index
    context = {
        "opposition1_term1": square.opposition1_term1,
        "opposition1_term2": square.opposition1_term2,
        "opposition2_term1": square.opposition2_term1,
        "opposition2_term2": square.opposition2_term2,
        "neutral_term": square.neutral_term
    }

    return render(request, 'analysis/analysis.html', context)