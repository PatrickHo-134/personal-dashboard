from django.db import models

class News(models.Model):
    title = models.CharField(max_length=255)
    link = models.URLField()
    entry_id = models.CharField(max_length=255, unique=True)
    published_date = models.DateTimeField()
    publish_timestamp = models.DateTimeField(auto_now_add=True)
    source = models.CharField(max_length=100)
    source_href = models.URLField()

    def __str__(self):
        return self.title