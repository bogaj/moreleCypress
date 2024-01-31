describe('Search Engine tests', () => {
    beforeEach(function () {

        cy.fixture('loginData').then(loginData => {
            this.loginData = loginData;
        })
    });

    it('Search engine all category', () => {
        const searchName = "Podkładka";
        cy.visit("");
        cy.get('#header').find('input[type="search"]').type(`${searchName}{enter}`);
        cy.get('.cat-product-name').should('have.length.greaterThan',10).each((product) => {
            cy.wrap(product).should('contain',searchName);

            });




    })
})