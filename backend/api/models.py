from django.db import models

class Text(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title


class SemioticSquare(models.Model):
    opposition1_term1 = models.CharField(max_length=255, default='text')
    opposition1_term2 = models.CharField(max_length=255, default='text')
    opposition2_term1 = models.CharField(max_length=255, default='text')
    opposition2_term2 = models.CharField(max_length=255, default='text')
    neutral_term = models.CharField(max_length=255, default='text')

    def __str__(self):
        return f'{self.opposition1_term1} vs {self.opposition1_term2}'
