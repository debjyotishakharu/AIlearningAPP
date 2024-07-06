from django.urls import path
from . import views

# urlpatterns = [
#     path('skill-plan/', SkillPlanCreateView.as_view(), name='create-skill-plan'),
#     path('skill-plan/<int:pk>/', SkillPlanDetailView.as_view(), name='detail-skill-plan'),
#     path('roadmap/', RoadmapCreateView.as_view(), name='create-roadmap'),
#     path('generate-roadmap/', generate_roadmap_view, name='generate-roadmap'),
# ]
urlpatterns = [
    path('generate-roadmap/', views.generate_roadmap_view, name='generate_roadmap'),
    path('skill-plans/', views.SkillPlanCreateView.as_view(), name='skill_plan_create'),
    path('skill-plans/<int:pk>/', views.SkillPlanDetailView.as_view(), name='skill_plan_detail'),
    path('roadmaps/', views.RoadmapCreateView.as_view(), name='roadmap_create'),
]