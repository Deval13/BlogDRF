# from rest_framework import generics
# from rest_framework.views import APIView
# from blog.models import Post
# from .serializers import PostSerializer
# from rest_framework.permissions import SAFE_METHODS, AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions
# from rest_framework import viewsets
# from rest_framework import filters
# from django.shortcuts import get_object_or_404
# from rest_framework.response import Response
# from rest_framework import filters

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status
from django.shortcuts import get_object_or_404
from blog.models import Post
from .serializers import PostSerializer, UserSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
# from django.conf import settings
from users.models import NewUser
# Create your views here.

class UserWritePermission(permissions.BasePermission):
    message = "You are not eligible for editing these post "
    
    def has_object_permission(self , request, view , object ):
        if (request.method in permissions.SAFE_METHODS ):
            return True
        
        return object.author == request.user
    

# class PostList(viewsets.ModelViewSet):
#     # permission_classes = [IsAuthenticated]
#     serializer_class = PostSerializer

#     def get_object(self, queryset=None, **kwargs):
#         item = self.kwargs.get('pk')
#         return get_object_or_404(Post, slug=item)

#     # Define Custom Queryset
#     def get_queryset(self):
#         return Post.objects.all()


    
    # Serialize the user data
    # serializer = UserSerializer(user)
    
    # Return the serialized data 
class PostListParticularUser(generics.ListAPIView):
    serializer_class = PostSerializer
    permissions_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        print('current user is ' , self.request.user)
        print('data is ' ,Post.postobjects.filter(author = self.request.user) )
        return Post.postobjects.filter(author = self.request.user)

class PostList(generics.ListAPIView):
    # permissions_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    

class getData(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    def get_queryset(self):
        return NewUser.objects.filter(user_name = self.request.user)
        
    

class PostDetail(generics.RetrieveAPIView):
    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, slug=item)


class PostListDetailfilter(generics.ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.


class PostSearch(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']


# class CreatePost(generics.CreateAPIView):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class CreatePost(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print("post image is " ,request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            print("serializer data is valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print("serializer data  is  not valid")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdminPostDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class EditPost(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class DeletePost(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

# class PostList(viewsets.ModelViewSet):
#     # do not use useAthenticate because then you will need jwttoken before signin which is not possibke
#     permission_classes = [UserWritePermission]
#     serializer_class = PostSerializer

#     def get_object(self, queryset=None, **kwargs):
#         item = self.kwargs.get('pk')
#         return get_object_or_404(Post, slug=item)

#     # Define Custom Queryset
#     def get_queryset(self):
#         return Post.objects.all()
        
# # class PostList(generics.ListCreateAPIView):
# #     # permission_classes = [DjangoModelPermissions]
# #     queryset = Post.postobjects.all()
# #     serializer_class = PostSerializer
 

# # the below class will be used for userprofile as it will have both published and drafted blogs
# class PostDetail(generics.RetrieveUpdateDestroyAPIView, UserWritePermission):
#     permission_classes = [UserWritePermission]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer



