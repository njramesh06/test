/// <reference types="cypress" />

const dataJson = require('../../fixtures/create.json')
const updateJson = require('../../fixtures/update.json')

export default class ApiServices {

    getRequest(){
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        }).then(response => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200);
        })
    }
    
    postRequest(){
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'Content-type':'application/json'
            },
            body:{
                "title":dataJson.title,
                "body":dataJson.body,
                "userId2":1
            }
        }).then(response => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201);
            expect(response.body).has.property('title', 'MR')

           expect(response.body).has.property('body','SampleTest')
           expect(response.body).has.property('userId2',1)
        })
    }
    putRequest(){
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-type':'application/json'
            },
            body:{
                "title":updateJson.title,
                "body":updateJson.body,
                "userId2":updateJson.userId1
            }
        }).then(response => {
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200);
            expect(response.body).has.property('titile','MR')
            expect(response.body).has.property('body','SampleTestUpdated')
            expect(response.body).has.property('userId1',1)
        })
    }

    
}