

export default class ShoppingPageElements{

    dressTabEle(){
        return cy.xpath("(//a[@title='Dresses'])[2]")
    }
    listViewEle(){
        return cy.xpath("//*[@class='icon-th-list']")
    }
    addCartBtnEle(){
        return cy.xpath("(//a/span[contains(text(),'Add to cart')])[1]")
    }
    proceedToCheckBtnEle(){
        return cy.xpath("//a[@title='Proceed to checkout']")
    }
    addQuanEle(){
        return cy.xpath("//a[@class='cart_quantity_up btn btn-default button-plus']")
    }
    btnCreateAccountEle(){
        return cy.xpath("//button[@name='SubmitCreate']")
    }
    inpEmailAddEle(){
        return cy.xpath("(//label[@for='email_create']/following::input[@type='text'])[1]")
    }
    inpuMrRadioBtnEle(){
        return cy.xpath("//label[@for='id_gender1']//span/input[@type='radio']")
    }
    inpFirsnameEle(){
        return cy.xpath("(//label[@for='customer_firstname']/following::input[@type='text'])[1]")
    }
    inpLastnameEle(){
        return cy.xpath("(//label[@for='customer_lastname']/following::input[@type='text'])[1]")
    }
    inpPasswordEle(){
        return cy.xpath("//input[@type='password']")
    }
    inpuFirstNameOnAddEle(){
        return cy.xpath("(//label[@for='customer_firstname']/following::input[@type='text'])[4]")
    }
    inpLastNameOnAddEle(){
        return cy.xpath("(//label[@for='customer_lastname']/following::input[@type='text'])[4]")
    }
    inpCompanyEle(){
        return cy.xpath("(//label[@for='company']/following::input[@type='text'])[1]")
    }
    inpAddressLine1Ele(){
        return cy.xpath("(//label[@for='address1']/following::input[@type='text'])[1]")
    }
    inpAddressLine2Ele(){
        return cy.xpath("(//label[@for='address2']/following::input[@type='text'])[1]")
    }
    inpCityEle(){
        return cy.xpath("(//label[@for='city']/following::input[@type='text'])[1]")
    }
    inpStateEle(){
        return cy.xpath("(//label[@for='id_state']/following::input[@type='text'])[1]")
    }
    inpPostcodeEle(){
        return cy.xpath("(//label[@for='postcode']/following::input[@type='text'])[1]")
    }
    inpAddInfoEle(){
        return cy.xpath("//textarea[@id='other']")
    }
    inpHomePhoneEle(){
        return cy.xpath("(//label[@for='phone']/following::input[@type='text'])[1]")
    }
    inpMobileEle(){
        return cy.xpath("(//label[@for='phone_mobile']/following::input[@type='text'])[1]")
    }
    inpAddAliasEle(){
        return cy.xpath("(//label[@for='alias']/following::input[@type='text'])[1]")
    }
    registerBtnEle(){
        return cy.xpath("//button[@id='submitAccount']")
    }
    btnProceedToCheckOutEle2(){
        return cy.xpath("//*[@id='HOOK_SHOPPING_CART']/following::a[@title='Proceed to checkout']")
    }
    slctDaysEle(){
        return cy.xpath("//label[.='Date of Birth']/following::select[@id='days']")
    }
    slctMonthsEle(){
        return cy.xpath("//label[.='Date of Birth']/following::select[@id='months']")
    }
    slctYearEle(){
        return cy.xpath("//label[.='Date of Birth']/following::select[@id='years']")
    }
    slctStateEle(){
        return cy.xpath("//label[@for='id_state']/following::select[@id='id_state']")
    }
    inpTextArea(){
        return cy.xpath("//textarea[@class='form-control']")
    }

    btnProceedtocheckoutEle3(){
        return cy.xpath("//button/span[contains(text(),'Proceed to checkout')]")
    }
    inpTypeCheckbox(){
        return cy.xpath("//input[@type='checkbox']")
    }
    paymentMethodEle(){
        return cy.xpath("//a[@class='bankwire']")
    }
    btnConfirmMyOrderEle(){
        return cy.xpath("//button/span[.='I confirm my order']")
    }
    orderCompleteTextEle(){
        return cy.xpath("//*[contains(text(),'Your order on My Store is complete.')]")
    }
    productNameEle(){
        return cy.xpath("//p[@class='product-name']/a")
    }
    priceEle(){
        return cy.xpath("//span[@class='price']")
    }
    totalPriceEle(){
        return cy.xpath("//span[@id='total_price']")
    }
    quantityEle(){
        return cy.xpath("//*[@class='cart_quantity text-center']/span[1]")
    }


}