import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";




Given('create a POST call to create a pet entity', () => {

  cy.fixture('createPet').then((requestBody) => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', requestBody.id);
      cy.log('Response:', JSON.stringify(response.body));
    });
  });


})

Then('get the deatils of newly created pet', () => {

  cy.request({
    method: 'GET',
    url: 'https://petstore.swagger.io/v2/pet/49',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.id).to.equal(49)
    cy.log('Response:', JSON.stringify(response.body));
  });





})


Then('update the existing pet record', () => {

  cy.fixture('updatePetDetails').then((requestBody) => {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', requestBody.id);
      expect(response.body).to.have.property('name', requestBody.name);
      expect(response.body).to.have.property('status', requestBody.status);
      cy.log('Response:', JSON.stringify(response.body));
    });
  });


})



Then('delete a pet record', () => {

  cy.request({
    method: 'DELETE',
    url: 'https://petstore.swagger.io/v2/pet/49',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.equal('49')
    cy.log('Response:', JSON.stringify(response.body));
  });



})