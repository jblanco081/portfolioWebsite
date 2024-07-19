from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

class SampleData(APIView):
    def get(self, request):
        data = {"message": "Hello from the backend!"}
        return Response(data)

class AnotherData(APIView):
    def get(self, request):
        data = {"info": "This is another endpoint"}
        return Response(data)

class ProjectList(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
