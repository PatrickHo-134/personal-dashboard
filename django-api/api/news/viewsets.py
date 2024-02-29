from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import NewsSerializer
from .models import News
from pygooglenews import GoogleNews
from dateutil import parser
import json
import time

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

def get_top_headlines(source_country="AU"):
    gn = GoogleNews(country = source_country)

    top = gn.top_news()
    entries = top["entries"]

    result = list(map(transform_entry_detail, entries))

    return result

def get_topic_headlines(source_country="AU", topic='business'):
    gn = GoogleNews(country = source_country)

    data = gn.topic_headlines(topic, proxies=None, scraping_bee = None)
    entries = data['entries']

    result = list(map(transform_entry_detail, entries))

    return result

def generate_headlines(country="AU", topic="top news"):
    if topic == None or topic == "top news":
        entries = get_top_headlines(country)
    else:
        entries = get_topic_headlines(country, topic)

    return entries

class NewsHeadlinesView(APIView):
    def get(self, request, *args, **kwargs):
        source_country = request.GET.get("country", "AU")
        news_topic = request.GET.get("topic", "top news")

        try:
            news_headlines = generate_headlines(source_country, news_topic)
            serializer = NewsSerializer(news_headlines, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)