from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import SkillPlan, Roadmap
from .serializers import SkillPlanSerializer, RoadmapSerializer
from .generateroadmap import generate_roadmap
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes

class SkillPlanCreateView(generics.CreateAPIView):
    queryset = SkillPlan.objects.all()
    serializer_class = SkillPlanSerializer

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

class SkillPlanDetailView(generics.RetrieveAPIView):
    queryset = SkillPlan.objects.all()
    serializer_class = SkillPlanSerializer

class RoadmapCreateView(generics.CreateAPIView):
    queryset = Roadmap.objects.all()
    serializer_class = RoadmapSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        roadmap = response.data
        skill_plan_id = request.data.get('skill_plan')
        SkillPlan.objects.filter(id=skill_plan_id).update(roadmap_id=roadmap['id'])
        return response

@api_view(['POST'])
@permission_classes([AllowAny])
def generate_roadmap_view(request):
    skill = request.data.get('skill')
    proficiency = request.data.get('proficiency')
    learning_pace = request.data.get('learning_pace')

    if not skill or not proficiency or not learning_pace:
        return Response({"error": "Skill, proficiency, and learning pace are required."}, status=status.HTTP_400_BAD_REQUEST)

    roadmap_description = generate_roadmap(skill, proficiency, learning_pace)
    roadmap = Roadmap.objects.create(name=f"{skill} Roadmap", description=roadmap_description)
    
    user = request.user if request.user.is_authenticated else None
    skill_plan = SkillPlan.objects.create(user=user, skill=skill, proficiency=proficiency, learning_pace=learning_pace, roadmap=roadmap)

    return Response(SkillPlanSerializer(skill_plan).data, status=status.HTTP_201_CREATED)
