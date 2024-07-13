from django.http import JsonResponse
from base.models import Bot,Category,Message,Useruuid
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BotSerializer,MessageSerializer
from django.contrib.auth.models import User

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET/api/bots',
        'POST/api/createbot/',
        
    ]
    return Response(routes)
@api_view(['GET'])
def getbots(request):
    bots = Bot.objects.all()
    serializer = BotSerializer(bots,many = True)

    return Response(serializer.data)

@api_view(['POST'])
def createbot(request):
    
    if request.method == 'POST':
        category_name = request.POST.get('category')
        category, created = Category.objects.get_or_create(name=category_name)
        user = Useruuid.objects.get(uuid = request.POST.get('uuid'))
        Bot.objects.create(
            admin=user,
            category=category,
            name=request.POST.get('name'),
            desc=request.POST.get('description')
        )
            
        return Response({"msg":"Data inserted sucessfully"})

    
    return Response({"msg":"only post request accepted"})
@api_view(['GET','POST'])
def bot(request, pk):
    bot = Bot.objects.get(id=pk)
    user_messages = bot.message_set.all()
    

    if request.method == 'POST':
        user = Useruuid.objects.get(
            uuid = request.POST.get('uuid')
        )
        message = Message.objects.create(
            user= user,
            bot=bot,
            body=request.POST.get('body')
        )

        user_messages = bot.message_set.all()
        serializer = MessageSerializer(user_messages,many = True)
        return Response(serializer.data)

    serializer = MessageSerializer(user_messages,many = True)
    return Response(serializer.data)
@api_view(['POST'])
def createuseruuid(request):
    user = Useruuid.objects.create(
            uuid = request.POST.get('uuid')
        )
    
    return Response({"msg":"user created", "uuid": request.POST.get('uuid')})


