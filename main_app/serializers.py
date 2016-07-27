from rest_framework import serializers
from main_app.models import Location, Category, Listing, SpecialSale # , Profile
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ('id', 'city')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category')


class ListingSerializer(serializers.ModelSerializer):
    seller = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Listing
        fields = ('id', 'item', 'description', 'photo', 'price', 'seller', 'category')


class SpecialSaleSerializer(serializers.ModelSerializer):
    seller = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = SpecialSale
        fields = ('id', 'special_sale_name', 'special_sale_category',
        'special_sale_description', 'item', 'description', 'photo', 'price',
        'seller', 'category')


# class ProfileSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Profile
#         fields = ('id', 'first_name', 'last_name', 'email_address', 'location', 'street_address', 'phone', 'photo')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email_address', 'first_name', 'last_name', 'street_address', 'photo')


class CreateUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('email_address', 'password', 'first_name', 'last_name', 'photo')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email_address=validated_data['email_address'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            photo=validated_data['photo'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
