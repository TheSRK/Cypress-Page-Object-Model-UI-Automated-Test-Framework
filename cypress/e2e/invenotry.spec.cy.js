import { InventoryPage } from "../Pages/InventoryPage";

describe('adding products to cart', ()=>{
    it('should add product to cart', ()=>{
        InventoryPage.isLoaded()
                    .checkHeaderTitle()
                    .addToCart('Add to cart')
                    .checkCartQuantity(1)
                    .clickCartIcon()
    })
})