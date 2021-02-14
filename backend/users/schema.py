from django.core.checks.messages import Error
from django.core.exceptions import ValidationError

import ujson
import logging
from jsonschema import validate, exceptions

logger = logging.getLogger(__name__)

dummy_schema = {
  "title": "회원",
  "version": 1,
  "type": "object",
  "properties": {
      "name": {"type": "string",  "minLength": 1, "maxLength": 10}, # 성명(1~10자리 허용)
      # 핸드폰번호, 정규 표현식(nnn-nnn-nnnn or nnn-nnnn-nnnn)
      "cellphone_number": {"type": "string", "pattern": "^\d{3}-\d{3,4}-\d{4}$"}, 
      "address": { # 주소
          "type": "object",
          "properties": {
              "zip": {"type": "integer"}, # 우편번호
              "detail_address": {"type": "string"} # 상세주소
          }
      },
      # 숫자 범위 지정, x ≥ minimum, x > exclusiveMinimum, x ≤ maximum, x < exclusiveMaximum
      "age": {"type": "integer", "minimum": 1, "exclusiveMaximum": 200}, # 나이(1~199), 정수
      "weight": {"type": "number", "minimum": 1}, # 몸무게(1~), 정수 or 소수 ex. 70, 71.5
      "member_type_code": {"type": "string", "enum": ["VVIP", "VIP", "NORMAL"]}, # 멤버타입코드
      "is_royal_member": {"type": "boolean" }, # 로얄멤버여부
      "preferred_categories": {"type": "array", "items": {"type": "string"}} # 선호카테고리배열
  },
  "required": ["name", "cellphone_number"] # 성명과 핸드폰번호를 필수프로퍼티로 정의
}

login_schema = {
  "type" : "object",
  "properties" : {
    "username" : {
      "type" : "string"
    },
    "password" : {
      "type" : "string"
    }
  },
  "required": ["username", "password"]
}

class UserSchema():
  def __init__(self):
    self.dummy = dummy_schema
    self.validator = validate
  
  def login_validator(self, req):
    body = ujson.loads(req.body)
    try:
      self.validator(schema=login_schema, instance=body)
      return body
    except exceptions.ValidationError as e:
      return e.message
  