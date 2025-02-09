Feature: validate performing CRUD operations on  pet entity using API 

Scenario Outline: validate performing operations on  pet entity using API

Given create a POST call to create a pet entity
Then get the deatils of newly created pet
Then update the existing pet record
Then delete a pet record