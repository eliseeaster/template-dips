//https://blog.logrocket.com/intro-testing-sveltekit-applications/

const baseUrl = 'http://localhost:9000';
describe('Test', () => {
    it('Confirms patient name', () => {
        cy.visit(baseUrl)
        cy.get('.header').contains('Abram Lemke')

        // cy.get('.data').children().should('have.length', 336)
        // cy.get('.product_name').contains('Amazon Spain')
        // cy.get('.currency_code').should(($currency_code) => {
        //     expect($currency_code).to.have.length(84)
        //     expect($currency_code).to.contain('EUR')
        //     expect($currency_code).to.contain('USD')
        //     expect($currency_code).to.not.contain('GBP')
        // })
    })
  })