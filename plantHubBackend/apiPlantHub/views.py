from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests
from .models import Plant

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
        Plant.objects.create(id=plant['id'], name=plant['common_name'],cycle=plant['cycle'],watering=plant['watering'],sunlight=plant['sunlight'],image=plant['default_image']['regular_url'])
        # pass

    return render(request,'http://localhost:3000/',{'plant':Plant} )
    # return JsonResponse(Plant, safe=False)
    # return JsonResponse({'success': True})



def fetchPlant(request):
    plant=Plant.objects.all().values()
    return JsonResponse({"plantList": list(plant)})
































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






















