from django.shortcuts import render
from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
# Create your views here.

class PostList(generics.ListCreateAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


# the below class will be used for userprofile as it will have both published and drafted blogs
class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer



