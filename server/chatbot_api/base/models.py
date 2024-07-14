from django.db import models


# Create your models here.

class Useruuid(models.Model):
    uuid = models.CharField(max_length=200)


class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name
    
class Bot(models.Model):
    # admin = models.ForeignKey(Useruuid, on_delete=models.SET_NULL, null=True)
    # category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    # name = models.CharField(max_length=200)
    # desc = models.TextField(null=True, blank=True)
    # updated = models.DateTimeField(auto_now = True)
    # created = models.DateTimeField(auto_now_add = True)

    uuid = models.ForeignKey(Useruuid, on_delete=models.SET_NULL, null=True, related_name='bots')
    bot_name = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='bots')
    owner_name = models.CharField(max_length=200, blank=False, default="Unknown")
    company_name = models.CharField(max_length=200, blank=False, default="Unknown")
    contact_number = models.CharField(max_length=12, null=True, blank=False)
    desc = models.TextField(null=True, blank=False)
    excelsheet = models.BooleanField(default=False,null=True)
    profile = models.BooleanField(default=False,null=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated','-created']

    def __str__(self):
        return self.name
    
class Message(models.Model):
    user = models.ForeignKey(Useruuid, on_delete=models.CASCADE)
    bot = models.ForeignKey(Bot, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    sender = models.TextField(null=True)
    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:50]
    

