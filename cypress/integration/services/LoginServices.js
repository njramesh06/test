/// <reference types="cypress" />

import CommonServices from '../services/CommonServices'
import baseUrls from '../../constants/baseUrls'
import ShoppingPage from '../pageobjects/pageactions/myshopPage/ShoppingPage'

const commonServices = new CommonServices();
const shoppingPage = new ShoppingPage();

export default class LoginServices {

    constructor() {
        globalThis.applnTypeVal = null;
        globalThis.url = Cypress.env('profile');
    }

    navigateUI(applnType) {
        applnTypeVal = applnType;
       if(applnTypeVal == 'Shopping'){
            shoppingPage.navigateToURL(commonServices.getUrl(url));
        }
    }

}