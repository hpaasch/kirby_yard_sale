
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static  # for photos
from django.conf import settings  # for photos

from main_app.views import IndexView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', IndexView.as_view(), name='index_view'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
