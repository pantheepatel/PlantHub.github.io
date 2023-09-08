from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
from .models import Plant, PlantDetail


def reloadData(request):
    url = 'https://perenual.com/api/species-list?page=1&key=sk-XI3m64f21258ee70e1780'
    response = requests.get(url)
    data_ = response.json()
    print(data_)
    # Store the data in the database
    # plants = []
    for plant in data_['data']:
        # print(plant['common_name'])
        # plant_detail={'id': plant['id'],'name': plant['common_name']}
        # plants.append(plant_detail)
        Plant.objects.create(id=plant['id'], name=plant['common_name'], cycle=plant['cycle'],
                             watering=plant['watering'], image=plant['default_image']['regular_url'])
        #  sunlight=plant['sunlight']
    return JsonResponse({'success': True})
    # return JsonResponse({"plantList": list(Plant)})
    # return render(request, 'http://localhost:3000/', {'plant': Plant})
    # return JsonResponse(Plant, safe=False)


def reloadDataEachPlant(request, fromId=1, toId=3):
    for id in range(fromId, toId):
        url = 'https://perenual.com/api/species/details/' + \
            str(id)+'?key=sk-XI3m64f21258ee70e1780'
        response = requests.get(url)
        data_ = response.json()
        PlantDetail.objects.create(
            id=data_['id'],
            name=data_['common_name'],
            cycle=data_['cycle'],
            watering=data_['watering'],
            description=data_['description'],
            image=data_['default_image']['regular_url'],
            type=data_['type'],
            flowers=data_['flowers'],
            flowering_season=data_['flowering_season'],
            fruit=data_['fruits'],
            edible_fruit=data_['edible_fruit'],
            growth_rate=data_['growth_rate'],
            maintenance=data_['maintenance'],
            medicinal=data_['medicinal'],
            poisonous_to_humans=data_['poisonous_to_humans'],
            poisonous_to_pets=data_['poisonous_to_pets'],
            thorny=data_['thorny'],
            indoor=data_['indoor'],
            care_level=data_['care_level']
        )
        print('success:', id)
    return JsonResponse({'success': True})


# to get overview of all plants
def fetchPlants(request):
    plant = Plant.objects.all().values()
    return JsonResponse({"plantList": list(plant)})


# to get specific details for all plants
def fetchPlantDetails(request):
    plant = PlantDetail.objects.all().values()
    return JsonResponse({"plantDetails": list(plant)})


# to get only specific id plant
def fetchPlant(request, id):
    plant = PlantDetail.objects.filter(id=id).values()
    return JsonResponse({"plantDetails": list(plant)})


# from django.shortcuts import render
# import requests
# from django.http import JsonResponse
# from .models import Plant
# # import Plant
# # Create your views here.
# # print('hi')


# def fetch_data(request):
#     # print('hello')
#     url = 'https://perenual.com/api/species-list?page=1&key=sk-XI3m64f21258ee70e1780'
#     response = requests.get(url)
#     data_ = response.json()
#     print(data_)
#     # Store the data in the database
#     # plants = []
#     for plant in data_['data']:
#         # print(plant['common_name'])
#         # plant_detail={'id': plant['id'],'name': plant['common_name']}
#         # plants.append(plant_detail)
#         Plant.objects.create(id=plant['id'], name=plant['common_name'])
#         # pass

#     return render(request,'http://localhost:3000/',{'movies':Plant} )
#     # return JsonResponse(Plant, safe=False)
#     # return JsonResponse({'success': True})


# # def add_plant():
# #     return Plant.objects.create(id=Plant.id, name=Plant.name)
