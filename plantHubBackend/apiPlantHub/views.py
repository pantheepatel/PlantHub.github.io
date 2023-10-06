import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
from .models import Plant, PlantDetail, Like, UserProfile
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


def user(requests,id):
    email = requests.GET.get('email')
    # name = requests.GET.get('name')
    print(id)
    print(email)
    try:
        user = UserProfile.objects.create(id=id,email=email)
        user.save()
        print(user)
    except Exception as e:
        print('already exists error : ', e)
        return HttpResponse('User with this email exists', status=400)
    return JsonResponse({'status': 'ok-200'})

# @permission_classes([IsAuthenticated])


# @api_view(['POST'])
# def like_plant(request):
#     id = request.GET.get('id')
#     email = request.GET.get('email')
#     print(request, id, email)
#     # Check if the user has already liked the plant
#     existing_like = Like.objects.filter(user__email=email).filter(plant=id).values()
#     print('request is : ', existing_like)
#     if existing_like:
#         existing_like.delete()
#         return JsonResponse({'message': 'plant unliked'})
#     else:
#         Like.objects.create(user=email, plant=id)
#         return JsonResponse({'message': 'plant liked'})

# def like_plant(request):
#     # Assuming you're getting email and id from the request's query parameters
#     email = request.GET.get('email')
#     id = request.GET.get('id')
#     print('in here')
#     # Retrieve the User instance based on the email
#     try:
#         print('there is user ',email)
#         user,created = UserProfile.objects.get_or_create(email=email)
#         print('checking in here ',user)
#     except UserProfile.DoesNotExist:
#         # Handle the case where the user with the provided email doesn't exist
#         # You might want to return an error response or take appropriate action.
#         print('user does not exists')
#         return HttpResponse('User with this email does not exist', status=400)

#     # Create the Like object with the retrieved User instance
#     like,created=Like.objects.get_or_create(user=user, plant=id)

#     # # Respond with a success message or appropriate response
#     # return HttpResponse('Like created successfully')


#     # Check if the like was created or already existed
#     if created:
#         # Like was created
#         return HttpResponse('Like created successfully')
#     else:
#         # Like already exists
#         return HttpResponse('Like already exists')

def likePlant(request, id,uid):
    print(id,uid)
    plantObj = Plant.objects.get(pk=id)
    print(plantObj)
    userObj = UserProfile.objects.get(pk=uid)
    print(userObj)
    liked = Like.objects.filter(user=userObj).filter(plant=plantObj).first()
    print('after ')
    # Like.save()
    # liked.save()
    print('liked is ', liked)
    if not liked:
        liked = Like.objects.create(user=userObj, plant=plantObj)
        Like.save()
        # liked.save()
        return HttpResponse('Like created successfully')
    else:
        liked = Like.objects.filter(
            user=userObj).filter(plant=plantObj).delete()
        Like.save()
        # liked.save()
        return HttpResponse('Like already exists')


def reloadData(request):
    # there is data of 25 pages in database, when you next run this change values to (26,31) to load another 5page(150plants)
    for page in range(1, 6):
        url = 'https://perenual.com/api/species-list?page=1&key=sk-bCQQ651d99c97bf5a2342&page=' + \
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

# next time change the value to (201,251)


def reloadDataEachPlant(request, fromId=1, toId=31):
    for id in range(fromId, toId):
        url = 'https://perenual.com/api/species/details/' + \
            str(id)+'?key=sk-bCQQ651d99c97bf5a2342'
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


# def fetchPlantsPage(request, page):
#     plantDataArray = []
#     for plant in range((page*30)+1, ((page+1)*30)+1):
#         plantData = PlantDetail.objects.filter(id=plant).values()
#     # return JsonResponse({"plantDetails": list(plantData)})
#         # plantDataArray.append(list(plantData))
#         # plantDataArray=json.load(plantData)
#         plantDataArray.extend(plantData)
#     return JsonResponse({"plantList": list(plantDataArray)})


def searchPlant(request, searchTerm):
    plantDataArray = []
    plantData = PlantDetail.objects.filter(name__contains=searchTerm).values()
    # return JsonResponse({"plantDetails": list(plantData)})
    # plantDataArray.append(list(plantData))
    # plantDataArray=json.load(plantData)
    plantDataArray.extend(plantData)
    return JsonResponse({"plantList": list(plantDataArray)})


def fetchPlantsPage(requests, page):
    searchTerm = requests.GET.get('search')
    watering = requests.GET.get('water')
    indoor = requests.GET.get('indoor')
    # cycleType = requests.GET.get('ctype')
    print(searchTerm, watering, indoor)
    plantDataArray = []

    if (searchTerm and watering and indoor):
        plants = PlantDetail.objects.filter(name__contains=searchTerm).filter(
            watering__contains=watering).filter(indoor__contains=indoor).values()

    elif (searchTerm and indoor):
        plants = PlantDetail.objects.filter(name__contains=searchTerm).filter(
            indoor__contains=indoor).values()
    elif (searchTerm and watering):
        plants = Plant.objects.filter(name__contains=searchTerm).filter(
            watering__contains=watering).values()
    elif (indoor and watering):
        plants = PlantDetail.objects.filter(watering__contains=watering).filter(
            indoor__contains=indoor).values()

    elif (searchTerm):
        plants = Plant.objects.filter(name__contains=searchTerm).values()
    elif (watering):
        plants = Plant.objects.filter(watering__contains=watering).values()
    elif (indoor):
        plants = PlantDetail.objects.filter(indoor__contains=indoor).values()
    else:
        plants = Plant.objects.all().values()

    plantDataLength = plants.count()
    print(plantDataLength)
    # print(plants[0]['id'])
    for plant in plants:
        plantData = PlantDetail.objects.filter(id=plant['id']).values()
        plantDataArray.extend(plantData)

    displayPlant = []

    # for plantPage in range((page*30)+1, ((page+1)*30)+1):
    plants = plantDataArray[(page*30): ((page+1)*30)]
    displayPlant.extend(plants)

    return JsonResponse({"plantList": list(displayPlant), 'plantDataLength': plantDataLength})

    # return JsonResponse({"plantList": list(plantDataArray)})

# def filterPlant(request, filter):
#     plantDataArray = []
#     # plantData = PlantDetail.objects.filter(Q(Plant.watering(filter)) | Q(Plant.sunlight(filter))).values()
#     # if(file)
#     plantDataArray.extend(plantData)
#     return JsonResponse({"plantList": list(plantDataArray)})


# from django.shortcuts import render
# import requests
# from django.http import JsonResponse
# from .models import Plant
# # import Plant
# # Create your views here.
# # print('hi')


# def fetch_data(request):
#     # print('hello')
#     url = 'https://perenual.com/api/species-list?page=1&key=sk-bCQQ651d99c97bf5a2342'
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
