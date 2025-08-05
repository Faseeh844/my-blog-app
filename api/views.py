from .models import Post
from .serializers import PostSerializer
from rest_framework import generics, permissions
from .permissions import IsAuthorOrReadOnly

class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('-created_at') # Show newest first
    serializer_class = PostSerializer
    # Anyone can view (GET), but only authenticated users can create (POST)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Automatically set the author to the logged-in user
        serializer.save(author=self.request.user)

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # Use our custom permission: anyone can view, but only author can edit/delete
    permission_classes = [IsAuthorOrReadOnly]