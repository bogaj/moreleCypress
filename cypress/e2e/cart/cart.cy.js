describe('Cart tests', () => {
    it('Add product to cart', () => {
        cy.visit("")
        cy.get('.cn-heading').click()
        cy.get('.cn-name-value').contains("Gaming").click()
cy.url().should("contain","gaming")
        cy.get('.text-box').eq(2).click()
        cy.get('.swiper-wrapper').eq(0).find('img').first().click()
        cy.get('.add-to-cart__btn').click()
        cy.get('.icon-basket-count').eq(0).should(($el) => {
            const value = parseInt($el.text().trim());
            expect(value).to.be.greaterThan(0);
        });

    })
})