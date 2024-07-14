from rest_framework.serializers import ModelSerializer
from base.models import Bot,Message,Useruuid

class BotSerializer(ModelSerializer):
    class Meta:
        model = Bot
        fields = '__all__'
class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

        
class UuidSerializer(ModelSerializer):
    class Meta:
        model = Useruuid
        fields = '__all__'
