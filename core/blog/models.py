from django.db import models
# from django.contrib.auth.models import User
from django.utils import timezone
from django.conf import settings
from django.utils.translation import gettext_lazy as _
# Create your models here.

def upload_to(instance, filename):
    print("filename " , filename)
    return 'posts/{filename}'.format(filename=filename)

class Category(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name



class Post(models.Model):
    
    def __str__(self) -> str:
        return self.title
    
    class PostObjects(models.Manager):
        def get_queryset(self) -> models.QuerySet:
            return super().get_queryset().filter(status = 'published' or 'Published')
    
    options = (
        ('published' , 'Published'),
        ('draft' , 'Draft')
        )
    category = models.ForeignKey(Category , on_delete=models.PROTECT , default=1)
    author = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete= models.CASCADE ,   related_name='blog_posts')
    title = models.CharField(max_length=100)
    image = models.ImageField(
        _("Image"), upload_to=upload_to, default='posts/default.png')
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField( max_length=250 , unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10 , choices= options,  default='published')
    objects = models.Manager()
    postobjects = PostObjects()
    
    class Meta : 
        ordering = ('-published',)