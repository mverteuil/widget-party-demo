# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url
from django.contrib import admin

from dashing.utils import router

from django.views.generic.base import RedirectView


urlpatterns = patterns('',
    url(r'^admin/$', include(admin.site.urls), name='admin'),
    url(r'^dashboard/', include(router.urls), name='dashboard'),
    url(r'^$', RedirectView.as_view(url='dashboard/'), name='index')
)
