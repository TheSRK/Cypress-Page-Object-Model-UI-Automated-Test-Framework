import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor"
import {LoginPage} from "../Pages/LoginPage"
import {InventoryPage} from "../Pages/InventoryPage"
let testData;
Given("A user visited swaglab", ()=>{
    cy.visit('/')
    cy.fixture('users').then(function(dataJson) {
        testData = dataJson;
        //return testData;
      });
})

When("A user enter the username {string}", (username)=>{
    LoginPage.getUsername().type('standard_user').should('have.value', testData.username)
})

And ("A user enter the password {string}", (password)=>{
    LoginPage.getPassword().type('secret_sauce')
        
})

And ("user click the login button", ()=>{
    LoginPage.doLogin().should('be.visible').click()
})

Then("A user will be logged in", ()=>{
    InventoryPage.checkHeaderTitle()
})