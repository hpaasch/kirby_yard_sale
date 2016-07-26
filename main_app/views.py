from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from rest_framework import generics

# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


from main_app.serializers import LocationSerializer, CategorySerializer, ListingSerializer, CreateUserSerializer, UserSerializer
from main_app.models import Location, Category, Listing #, Profile


class IndexView(TemplateView):
    template_name = 'index.html'


class LocationListAPIView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LocationDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ListingListAPIView(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class UserRegisterAPIView(generics.CreateAPIView):
    serializer_class = CreateUserSerializer


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CurrentUserAPIView(generics.RetrieveUpdateAPIView):
    model = User
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user;



# class ProfileListAPIView(generics.ListAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#
#
# class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
