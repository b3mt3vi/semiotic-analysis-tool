from django.db import models

class Text(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class SemioticSquare(models.Model):
    text = models.ForeignKey(Text, on_delete=models.CASCADE, related_name='semiotic_squares')
    opposition_1 = models.CharField(max_length=255)
    opposition_2 = models.CharField(max_length=255)
    neutral_term = models.CharField(max_length=255, blank=True, null=True)
    contradictory_term = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f'{self.opposition_1} vs {self.opposition_2}'

# Create your models here.
