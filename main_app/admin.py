from django.contrib import admin

from main_app.models import Location, Category, Listing, SpecialSale


class ListingAdmin(admin.ModelAdmin):
    list_display = ['item', 'seller', 'price', 'created']


admin.site.register(SpecialSale)
admin.site.register(Location)
admin.site.register(Category)
admin.site.register(Listing, ListingAdmin)
