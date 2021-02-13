from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


import ujson
import logging
from rest_framework import status, viewsets

from . import validators
from .forms import LoginForm
from .models import User
from .serializers import LoginSerializer

logger = logging.getLogger(__name__)

@require_http_methods(["POST"])
def login_view(request):
  status_code = status.HTTP_200_OK
  body = ujson.loads(request.body)
  validation = validators.validate_api(body)
  # logger.info(f'Get Attributes {body}')
  
  return HttpResponse("You're looking at question")

class Login_restful_main(viewsets.ModelViewSet):
  queryset = User.obejcts.all()
  serializer_class = LoginSerializer
  