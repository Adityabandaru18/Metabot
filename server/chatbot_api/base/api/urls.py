from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes),
    path('bots/',views.getbots),
    path('createbot/',views.createbot),
    path('bot/<str:pk>/', views.bot),
    path('createuser/',views.createuseruuid),
    
]