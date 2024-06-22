from rest_framework import serializers
from .models import SkillPlan, Roadmap

class RoadmapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Roadmap
        fields = '__all__'

class SkillPlanSerializer(serializers.ModelSerializer):
    roadmap = RoadmapSerializer(read_only=True)

    class Meta:
        model = SkillPlan
        fields = '__all__'
