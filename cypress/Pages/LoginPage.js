export class LoginPage{

    //locators of login page
    static txtUsername = '#user-name'
    static txtPassword = '[placeholder="Password"]'
    static btnLogin = '#login-button'

    //input username
    static getUsername(){
        return cy.get(this.txtUsername)
        
    }

    static getPassword(){
        return cy.get(this.txtPassword)
        
    }

    static doLogin(){
        return cy.get(this.btnLogin)
        
    }
}

