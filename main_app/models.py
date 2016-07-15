from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save  # very commonly used
from django.dispatch import receiver  # goes with post_save and other signals
from rest_framework.authtoken.models import Token


class Location(models.Model):
    city = models.CharField(max_length=30)

    def __str__(self):
        return self.city


class Category(models.Model):
    category = models.CharField(max_length=30)

    def __str__(self):
        return self.category

    class Meta:
        verbose_name_plural = "Categories"


class Listing(models.Model):
    item = models.CharField(max_length=40)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    photo = models.ImageField(upload_to='listing_photos', verbose_name='Upload a photo')
    category = models.ForeignKey(Category)
    seller = models.ForeignKey(User)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.item

    class Meta:
        ordering = ['-created']


class Profile(models.Model):
    user = models.OneToOneField('auth.User')
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    location = models.ForeignKey(Location, null=True, blank=True)
    email_address = models.EmailField(max_length=45, null=True, blank=True)
    street_address = models.TextField()
    phone = models.CharField(max_length=14)
    photo = models.ImageField(upload_to='logo_images', null=True, blank=True, verbose_name='Upload a logo')

    @property
    def photo_url(self):
        if self.photo:
            return self.photo.url
        return 'http://cache1.asset-cache.net/gc/499060099-silhouette-of-fashion-girls-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=M1WaA%2BMWPJUr3hK%2F6zzzX5TIop2kRCYnewKalQna8ZBT%2BbVwpUDAEifKrtnF2FhQ'


@receiver(post_save, sender='auth.User')
def create_user_profile(**kwargs):
    created = kwargs.get('created')
    instance = kwargs.get('instance')

    if created:
        Profile.objects.create(user=instance)  # hooks profile to user


@receiver(post_save, sender='auth.User')
def create_token(**kwargs): # a shortcut pass in
    created = kwargs.get("created")  # boilerplate
    instance = kwargs.get("instance")  # boilerplate
    if created:
        Token.objects.create(user=instance)  # yep. standard.
