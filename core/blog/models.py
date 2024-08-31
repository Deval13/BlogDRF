from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

    

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
    author = models.ForeignKey(User , on_delete= models.CASCADE ,   related_name='blog_posts')
    title = models.CharField(max_length=100)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField( max_length=250 , unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10 , choices= options,  default='published')
    objects = models.Manager()
    postobjects = PostObjects()
    
    class Meta : 
        ordering = ('-published',)