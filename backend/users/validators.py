from rest_framework import serializers

class NestedSerializer(serializers.Serializer):
    nested = serializers.BooleanField(required=True)
    value = serializers.CharField(required=True)

class DataSerializer(serializers.Serializer):
    string_field = serializers.CharField(required=True)
    number_field = serializers.IntegerField(required=True)
    float_field = serializers.FloatField(required=True)
    dict_field = NestedSerializer(required=True)
    url_field = serializers.URLField(required=True)
    email_field = serializers.EmailField(required=True)
    date_field = serializers.DateField(required=True)
    time_field = serializers.TimeField(required=True)
    list_field = serializers.ListField(required=True)

def validate_api(request):
    res = {}
    res["success"] = True
    res["errors"] = None
    res["details"] = None
    validation = DataSerializer(data=request)
    if validation.is_valid():
        res["success"] = True
    else:
        res["success"] = False
        res["details"] = "Bad Request Body"
        res["errors"] = validation.errors
    return res