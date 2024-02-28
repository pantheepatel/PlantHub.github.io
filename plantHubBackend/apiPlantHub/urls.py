from django.contrib import admin
from django.urls import path
from apiPlantHub import views # get views of apiPlantHub

urlpatterns = [    
    path('data&page=<int:page>/', views.fetchPlantsPage,name='dataPage'), # for pagination
    path('like/<int:id>/<str:uid>/',views.likePlant,name='like_plant'),
    path('plantData/<int:id>/',views.fetchPlant,name='plantDataId'), # to get the details of specific id plant from database (for specific id plant)
    path('user/<str:id>/',views.user,name='user'),
    path('user/like/<str:id>/',views.userLikes,name='userLikes'),
    
    path('reload/',views.reloadData,name='reload'), # this will fetch the overview details from original api and will store it into database
    path('reloadPlants/',views.reloadDataEachPlant,name='reloadPlants'), # this will fetch the all details of given ranged id plants from original api and will store it into database
]
