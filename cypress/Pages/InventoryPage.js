export class InventoryPage{

    //locators
    static txaHeaderTitle = 'span[class="title"]'
    static lstAllProducts = '.inventory_item'
    static lnkProductName = 'Sauce Labs Bike Light'
    static btnAddToCart = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    static btnRemoveFromCart = '[data-test="remove-sauce-labs-bike-light"]'
    static lnkCart = '.shopping_cart_link'
    static txaCartQuantity = '.shopping_cart_badge' 

    static isLoaded(){
        cy.get(this.lstAllProducts).should('have.length', 6)
        return this
    }

    static checkHeaderTitle(){
        cy.get(this.txaHeaderTitle).should('be.visible')
        return this
    }

    static addToCart(btnText){
        cy.get(this.btnAddToCart).should('be.visible').click()
        return this
    }

    static checkCartQuantity(number){
        cy.get(this.txaCartQuantity).should('be.visible').invoke('text').then($quantity=>{
            expect($quantity).to.include(number)
        })
        return this
    }

    static clickCartIcon(){
        cy.get(this.txaCartQuantity).should('be.visible')
        cy.get(this.lnkCart).click()
        
        return this
    }



}