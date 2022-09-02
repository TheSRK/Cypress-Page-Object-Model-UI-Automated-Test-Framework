import {LoginPage} from "../Pages/LoginPage"
describe('login', ()=>{

    before(() => {

        cy.visit('/')
      
      })

    it('should login', ()=>{
        LoginPage.inputUsername('standard_user')
        LoginPage.inputPassword('secret_sauce')
        LoginPage.doLogin()
    })
})