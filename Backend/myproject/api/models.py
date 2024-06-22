from django.db import models
from django.contrib.auth.models import User

class Roadmap(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class SkillPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.CharField(max_length=255)
    proficiency = models.CharField(max_length=50)
    learning_pace = models.CharField(max_length=50)
    roadmap = models.ForeignKey(Roadmap, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.skill} - {self.user.username}"

    class Meta:
        unique_together = ('user', 'skill')
