"""
URL configuration for plantHubBackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from apiPlantHub import views # get views of apiPlantHub

urlpatterns = [
    path('admin/', admin.site.urls), # for admin login
    # -- path('data/', views.fetchPlants,name='data'), # to get the overview of plants from database
    path('data&page=<int:page>/', views.fetchPlantsPage,name='dataPage'), # for pagination
    path('like/<int:id>/<int:uid>/',views.likePlant,name='like_plant'),
    # path('data&searchTerm=<str:searchTerm>/', views.searchPlant,name='search'), # to search plants from database
    # path('data&filter=<str:filter>/', views.filterPlant,name='filter'), # to get the filtered plants from database
    # -- path('plantData/', views.fetchPlantDetails,name='plantData'), # to get the details of plants from database (for all plants)
    path('plantData/<int:id>/',views.fetchPlant,name='plantDataId'), # to get the details of specific id plant from database (for specific id plant)
    path('user/<int:id>/',views.user,name='user'),
    
    path('reload/',views.reloadData,name='reload'), # this will fetch the overview details from original api and will store it into database
    path('reloadPlants/',views.reloadDataEachPlant,name='reloadPlants'), # this will fetch the all details of given ranged id plants from original api and will store it into database
]
