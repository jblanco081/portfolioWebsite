from django.urls import path
from .views import ProjectList, SampleData, AnotherData

urlpatterns = [
    path('sample/', SampleData.as_view(), name='sample_data'),
    path('another/', AnotherData.as_view(), name='another_data'),
    path('projects/', ProjectList.as_view(), name='project_list'),
]
