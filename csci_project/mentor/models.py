from django.db import models

class Rating(models.Model):
  rating_value = models.IntegerField(blank=True)

class Status(models.Model):
  status_value = models.IntegerField(blank=True)

class Mentor(models.Model):
  lastname = models.CharField(max_length=30, blank=True)
  middlename = models.CharField(max_length=30, blank=True)
  firstname = models.CharField(max_length=30, blank=True)
  linkedin_email = models.EmailField( blank=True)
  rating = models.ForeignKey(Rating, blank=True)
  bio = models.TextField(blank=True)
  status = models.ForeignKey(Status, null=True)
  
class Mentor_Contact_Information(models.Model):
  mentor_name = models.ForeignKey(Mentor)
  address = models.ForeignKey('Address')  
  email = models.ForeignKey('Email') 

class State(models.Model):
  name = models.CharField(max_length=30, blank=True)
  abbreviation = models.CharField(max_length=30, blank=True)

class Address(models.Model):
  city_name = models.CharField(max_length=100, blank=True)
  zip_code = models.IntegerField()
  state = models.ForeignKey(State) 
  street = models.CharField(max_length=100, blank=True)

class Company(models.Model):
  name = models.CharField(max_length=100, blank=True)
  address = models.ForeignKey(Address)
  
class Meeting(models.Model):
  mentor_name = models.ForeignKey(Mentor)
  company_name = models.ForeignKey(Company)
  date = models.DateField()

class Skill(models.Model):
  skill_name = models.CharField(max_length=30, blank=True)

class Feedback(models.Model):
  feedback = models.TextField()
  mentor_name = models.ForeignKey(Mentor)
  company_name = models.ForeignKey(Company)
  date = models.DateField()

class Email(models.Model):
  email_address = models.EmailField()

class User(models.Model):
  username = models.CharField(max_length=30, blank=True)

class System_Role(models.Model):
  role_type = models.CharField(max_length=30, blank=True)

  

