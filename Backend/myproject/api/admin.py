from django.contrib import admin
from .models import Roadmap, SkillPlan

@admin.register(Roadmap)
class RoadmapAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name',)

@admin.register(SkillPlan)
class SkillPlanAdmin(admin.ModelAdmin):
    list_display = ('user', 'skill', 'proficiency', 'learning_pace', 'created_at')
    search_fields = ('skill', 'user__username')
    list_filter = ('proficiency', 'learning_pace', 'created_at')
