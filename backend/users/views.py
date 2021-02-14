from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


import bcrypt
import logging
from rest_framework import status, viewsets

from .models import User
from .serializers import LoginSerializer
from .schema import UserSchema

logger = logging.getLogger(__name__)
user_schema = UserSchema()

@require_http_methods(["POST"])
def login_view(req):
  result = user_schema.login_validator(req)
  
  # req validation
  if isinstance(result, str):
    return JsonResponse(data={"message" : result}, 
                        status=400)
  
  me = User.objects.get(name=result.username)
  if bcrypt.checkpw(result.password.encode('utf-8'),
                    me.password):
    return JsonResponse(data={"message" : "Login Success!"},
                        status=200)
  else:
    return JsonResponse(data={"message" : "Login Failed.."},
                        status=401)

class Login_restful_main(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = LoginSerializer
  