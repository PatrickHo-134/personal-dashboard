from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import NewsSerializer
from .models import News
from pygooglenews import GoogleNews
from dateutil import parser
import json
import time

countries = {'AU': 'Australia',
             'US': 'United States'}

gn = GoogleNews(lang = 'en', country = 'AU')

top = gn.top_news()

def transform_entry_detail(entry):
    publish_timestamp = parser.parse(entry["published"])
    source_href = entry.get('source', {}).get('href')
    source = entry.get('source', {}).get('title')

    return {'title': entry['title'],
            'link': entry['link'],
            'entry_id': entry['id'],
            'published_date': entry['published'],
            'publish_timestamp': publish_timestamp,
            'source': source,
            'source_href': source_href}

def get_top_headlines():
    top = gn.top_news()
    entries = top["entries"]

    result = list(map(transform_entry_detail, entries))

    return result

def get_topic_headlines(topic='business'):
    data = gn.topic_headlines(topic, proxies=None, scraping_bee = None)
    entries = data['entries']

    result = list(map(transform_entry_detail, entries))

    return result

def generate_headlines(topic=None):
    if topic == None:
        entries = get_top_headlines()
    else:
        entries = get_topic_headlines(topic)

    count = 0
    result = []
    for entry in entries:
        count = count + 1
        headline = entry['title']
        result.append(headline)

    return result

class NewsHeadlinesView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            # Assuming you have a 'published' field in your News model
            news_headlines = get_top_headlines()
            # News.objects.filter(published=True).order_by('-published_date')[:10]

            # Serialize the queryset
            serializer = NewsSerializer(news_headlines, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)