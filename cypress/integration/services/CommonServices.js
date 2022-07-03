/// <reference types="cypress" />

import baseUrls from '../../constants/baseUrls'


export default class CommonServices {

    getUrl(url){
        let baseUrl = null;
        if(url.startsWith('https')){
            baseUrl = url;
        }else{
            baseUrl = baseUrls.LOGIN_URLS[url].baseUrl;
        }
        return baseUrl;
    }

}