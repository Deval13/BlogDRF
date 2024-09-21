from rest_framework import serializers
from blog.models import Post
from django.conf import settings
from users.models import NewUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('user_name', 'email', 'id')  # Add more fields if necessary

class PostSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    class Meta:
        model = Post
        fields = ('id' , 'title' , 'author' , 'image' , 'content' , 'excerpt' , 'status' , 'slug')
        