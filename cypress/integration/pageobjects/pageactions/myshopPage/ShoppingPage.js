import ShoppingPageElements from "../../pageelements/myshopPageElements/shoppingPageElements"

const shoppingPageElements = new ShoppingPageElements();

export default class ShoppingPage {
    navigateToURL(url) {
        cy.visit(url);
    }
    navigateToItemsPage(){
        cy.wait(3000)
        shoppingPageElements.dressTabEle().click()
      //list view
        shoppingPageElements.listViewEle().click()

        shoppingPageElements.addCartBtnEle().click()
        shoppingPageElements.proceedToCheckBtnEle().click()

        cy.scrollTo('top')
        //add quantity
        shoppingPageElements.addQuanEle().click()

        shoppingPageElements.btnProceedToCheckOutEle2().click()

        cy.scrollTo('top')

        function userID_Alpha_Numeric() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          }

        shoppingPageElements.inpEmailAddEle().type(userID_Alpha_Numeric()+'@test.com')
        shoppingPageElements.btnCreateAccountEle().click()
    }
    registrationPage(){
        shoppingPageElements.inpuMrRadioBtnEle().click()
        shoppingPageElements.inpFirsnameEle().type('TestFirstname')
        shoppingPageElements.inpLastnameEle().type('TestLastName')
        shoppingPageElements.inpPasswordEle().type('Password123')

        shoppingPageElements.slctDaysEle().select("2").wait(3000)
        shoppingPageElements.slctDaysEle().select("2")

        shoppingPageElements.slctMonthsEle().select("6").wait(3000)
        shoppingPageElements.slctMonthsEle().select("6")

        shoppingPageElements.slctYearEle().select("2000").wait(3000)
        shoppingPageElements.slctYearEle().select("2000")

        shoppingPageElements.inpuFirstNameOnAddEle().type('TestFirstname')
        shoppingPageElements.inpLastNameOnAddEle().type('TestLastName')
        shoppingPageElements.inpCompanyEle().type('ABC Ltd')
        shoppingPageElements.inpAddressLine1Ele().type('201')
        shoppingPageElements.inpAddressLine2Ele().type('Langleygreen')
        shoppingPageElements.inpCityEle().type('Crawley')

        shoppingPageElements.slctStateEle().select('1').wait(3000)
        shoppingPageElements.slctStateEle().select('1')

        shoppingPageElements.inpPostcodeEle().clear().type('89670')

        shoppingPageElements.inpAddInfoEle().type('Sample Order Placed')
        shoppingPageElements.inpHomePhoneEle().type('01293100100')
        shoppingPageElements.inpMobileEle().type('07008009001')
        shoppingPageElements.inpAddAliasEle().type('My Default Address')

        shoppingPageElements.registerBtnEle().click();

        shoppingPageElements.inpTextArea().type('Sample Order Confirmation')
        shoppingPageElements.btnProceedtocheckoutEle3().click()
        shoppingPageElements.inpTypeCheckbox().click()
        cy.wait(3000)
        shoppingPageElements.btnProceedtocheckoutEle3().click()

        shoppingPageElements.productNameEle().eq(0).then(($ele) => {
			let dress = $ele.text()
			cy.log("Product Name =============="+dress)
		})

        shoppingPageElements.quantityEle().eq(0).then(($ele) =>{
            let quantity = $ele.text()
            cy.log("Quantity =============" +quantity)

        })

        shoppingPageElements.priceEle().eq(0).then(($ele) =>{
            let price = $ele.text()
            cy.log("Price =============" +price)

        })

        shoppingPageElements.totalPriceEle().then(($ele) =>{
            let totalPrice = $ele.text()
            cy.log("Total Price ============="+totalPrice)

        })

        shoppingPageElements.paymentMethodEle().click()


        cy.wait(3000)
        cy.scrollTo('bottom')

        shoppingPageElements.btnConfirmMyOrderEle().click()

        shoppingPageElements.orderCompleteTextEle().should('be.visible')

        
    }
   
}
