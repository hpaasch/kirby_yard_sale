from django.contrib import admin

from main_app.models import Location, Category, Listing, Profile


class ListingAdmin(admin.ModelAdmin):
    list_display = ['item', 'seller', 'price', 'created']


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'location']
    search_fields = ['last_name', 'location']

admin.site.register(Location)
admin.site.register(Category)
admin.site.register(Listing, ListingAdmin)
admin.site.register(Profile, ProfileAdmin)
