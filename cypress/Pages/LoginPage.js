export class LoginPage{

    //locators of login page
    static txtUsername = '#user-name'
    static txtPassword = '[placeholder="Password"]'
    static btnLogin = '#login-button'

    //input username
    static inputUsername(username){
        cy.get(this.txtUsername).type(username).should('have.value', username)
        return this
    }

    static inputPassword(password){
        cy.get(this.txtPassword).type(password)
        return this
    }

    static doLogin(){
        cy.get(this.btnLogin).should('be.visible').click()
        cy.url().should('eq', Cypress.config().baseUrl+'/inventory.html')
        return this
    }
}

