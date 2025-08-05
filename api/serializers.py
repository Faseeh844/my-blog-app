# api/serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import Post

# ===============================================================
# Serializer for showing author details on a post
# ===============================================================
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

# ===============================================================
# Serializer for listing and creating blog posts
# ===============================================================
class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at', 'updated_at']
        read_only_fields = ['author', 'created_at', 'updated_at']

# ===============================================================
# Custom serializer for user registration to fix the compatibility issue
# ===============================================================
class CustomRegisterSerializer(RegisterSerializer):
    # This attribute is checked by django-allauth>=0.58.0.
    # We set it to False since we are not using phone number authentication.
    _has_phone_field = False

    # By inheriting from RegisterSerializer, we get all the necessary fields
    # (username, email, password, password2) and validation logic.