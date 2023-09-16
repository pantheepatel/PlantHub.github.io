import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
from .models import Plant, PlantDetail


def reloadData(request):
    for page in range(2, 8):
        url = 'https://perenual.com/api/species-list?page=1&key=sk-XI3m64f21258ee70e1780&page=' + \
            str(page)
        response = requests.get(url)
        data_ = response.json()
        print(data_)
        # Store the data in the database
        # plants = []
        id = 0
        for plant in data_['data']:
            # result={}
            for key in plant:
                if plant[key] is None:
                    plant[key] = 'none'
                    print(plant[key])
            #     if value is None:
            #         value = ''
            #     result[key] = value
            Plant.objects.create(id=plant['id'], name=plant['common_name'], cycle=plant['cycle'],
                                 watering=plant['watering'], image=plant['default_image'], sunlight=plant['sunlight'])
            # print('plant:------------------------------------------------------',plant)

    return JsonResponse({'success': True})
    # print(plant['common_name'])
    # plant_detail={'id': plant['id'],'name': plant['common_name']}
    # plants.append(plant_detail)
    # if(plant['default_image']) is not None:
    # # else:
    #     Plant.objects.create(id=plant['id'], name=plant['common_name'], cycle=plant['cycle'],
    #                      watering=plant['watering'], image='', sunlight=plant['sunlight'])
    # if((plant['default_image'])!=""):
    #     print(plant['default_image']['regular_url'])
    # else:print('null')
    #  sunlight=plant['sunlight']
    # return JsonResponse({"plantList": list(Plant)}, safe=False)
    # return JsonResponse({"plantList": list(Plant)})
    # return render(request, 'http://localhost:3000/', {'plant': Plant})
    # return JsonResponse(Plant, safe=False)


def reloadDataEachPlant(request, fromId=211, toId=217):
    for id in range(fromId, toId):
        url = 'https://perenual.com/api/species/details/' + \
            str(id)+'?key=sk-XI3m64f21258ee70e1780'
        response = requests.get(url)
        data_ = response.json()
        # print(PlantDetail.objects.values_list)
        # print(PlantDetail.)
        for key in data_:

            # if PlantDetail.objects not in data_:
            #     # data_[key]='none' or False
            #     # print(key,data_[key])
            #     print(PlantDetail.objects)
            if data_[key] is None:
                data_[key] = 'none'
                print(key, data_[key])

        PlantDetail.objects.create(
            id=data_['id'],
            name=data_['common_name'],
            cycle=data_['cycle'],
            watering=data_['watering'],
            description=data_['description'],
            image=data_['default_image'],
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
            care_level=data_['care_level'],
            attracts=data_['attracts'],
            # fruiting_season=data_['fruiting_season'] or '',
            # rare=data_['rare'] or 0,
        )
        print('success:', id)
    return JsonResponse({'success': True})


# to get overview of all plants
def fetchPlants(request):
    plant = Plant.objects.all().values()
    # plant = Plant.objects.filter(id=1)
    return JsonResponse({"plantList": list(plant)})


# to get specific details for all plants
def fetchPlantDetails(request):
    plant = PlantDetail.objects.all().values()
    return JsonResponse({"plantDetails": list(plant)})


# to get only specific id plant
def fetchPlant(request, id):
    plant = PlantDetail.objects.filter(id=id).values()
    return JsonResponse({"plantDetails": list(plant)})


def fetchPlantsPage(request, page):
    plantDataArray = []
    for plant in range((page*30)+1, ((page+1)*30)+1):
        plantData = PlantDetail.objects.filter(id=plant).values()
    # return JsonResponse({"plantDetails": list(plantData)})
        # plantDataArray.append(list(plantData))
        # plantDataArray=json.load(plantData)
        plantDataArray.extend(plantData)
    return JsonResponse({"plantList": list(plantDataArray)})


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
