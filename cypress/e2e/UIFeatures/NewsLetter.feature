Feature: validate the signup process of newsletter page

Scenario Outline: validate the newsletter signup process

Given Click on the Resources dropdown and click on newsletter sign-up
Then enter the user credentials "<email>" "<firstName>" "<lastName>"
Then validate the signup message after clicking on signup

Examples:
| email | firstName | lastName |
|pradeepboddu@gmail.com | pradeep | boddu|