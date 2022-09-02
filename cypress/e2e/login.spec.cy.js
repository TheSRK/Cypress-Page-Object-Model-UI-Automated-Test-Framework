import {LoginPage} from "../Pages/LoginPage"
describe('login', ()=>{
    
    let testData;

    before(function() {
        cy.visit('/')
        
        cy.fixture('users').then(function(dataJson) {
        testData = dataJson;
        //return testData;
      });
    });

    
    it('should login', ()=>{
        LoginPage.getUsername().type(testData.username).should('have.value', testData.username)
        LoginPage.getPassword().type(testData.password)
        LoginPage.doLogin().should('be.visible').click()
    })
})