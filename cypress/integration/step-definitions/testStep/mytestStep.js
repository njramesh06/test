import ShoppingPage from "../../pageobjects/pageactions/myshopPage/ShoppingPage"
import LoginServices from "../../services/LoginServices";

const shoppingPage = new ShoppingPage()
const loginService = new LoginServices()

Given('User on {string} Page',(type)=>{
   loginService.navigateUI(type);

})
And('User Added {string} to Shopping Cart', (type) =>{
    shoppingPage.navigateToItemsPage(type)

})
And('User entered Registration Details',() =>{
    shoppingPage.registrationPage()
    
})

