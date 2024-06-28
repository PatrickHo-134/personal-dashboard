from django.db import models

from django.db import models

class DomainProperty(models.Model):
    PROP_TYPE_CHOICES = [
        ('house', 'House'),
        ('unit', 'Unit'),
        ('townhouse', 'Townhouse'),
        ('apartment', 'Apartment'),
        ('duplex', 'Duplex'),
    ]

    domain_property_id = models.CharField(max_length=255, primary_key=True)
    address = models.TextField()
    postcost = models.CharField(max_length=255)
    suburb = models.CharField(max_length=255)
    bathroom = models.IntegerField()
    bedroom = models.IntegerField()
    parking = models.IntegerField()
    land_area = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    price = models.CharField(max_length=255, null=True, blank=True)
    listing_id = models.CharField(max_length=255)
    listing_url = models.URLField()
    first_listed_date = models.DateTimeField()
    floorplan_url = models.URLField(null=True, blank=True)
    price_guide_url = models.URLField(null=True, blank=True)
    property_type = models.CharField(max_length=50, choices=PROP_TYPE_CHOICES, default='house')
    create_ts = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'domain_property'
        unique_together = ('domain_property_id', 'listing_id')
        ordering = ['create_ts']

    def __str__(self):
        return f"{self.address} - {self.suburb}"

