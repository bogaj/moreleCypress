import TopMenuPage from "../../page-object/topMenuPage";
import LoginPage from "../../page-object/loginPage";

describe('Adding a product to the wish list', function () {
    beforeEach(function () {

        cy.fixture('loginData').then(loginData => {
            this.loginData = loginData;
        })
    });

    it('Add to wish list', function () {
        cy.visit("");
        TopMenuPage
            .loginButton
            .click();
        LoginPage.login(this.loginData.validUser.email, this.loginData.validUser.password);
        cy.url().should('equal', 'https://www.morele.net/');
        cy.get('.swiper-slide.product-slide.productData.swiper-slide-visible.swiper-slide-active').click();
        cy.get('.btn-shopping-lists').click(); //kliknięcie w serduszko

        cy.get('.shopping-lists-window').then($el => {
            if ($el.find('.shopping-lists-item').length > 0) {
                cy.get('.shopping-lists-item').then($el => {
                    if ($el.is(':visible')) {
                        cy.get('.shopping-lists-body-inside').click();
                        cy.get('.mn-body').should("contain","Produkt został zapisany na liście.")
                    } else {
                        cy.get('.shopping-lists-body-inside').click();
                        cy.get('.mn-body').should("contain","Produkt został zapisany na liście.")
                    }
                });
            } else {
                cy.get('.shopping-lists-add-new').click();
                cy.get('div.shopping-lists-add-form input[type="text"]').type("moja lista");
                cy.get('.shopping-lists-create').click();
                cy.get('.mn-body').should("contain","Lista zakupowa została dodana.")
                cy.get('.mn-body').should("contain","Produkt został zapisany na liście.")
            }
        });
        TopMenuPage.shoppingListButton.click()
        cy.url().should('include', 'inventory/list/');
        cy.get('.shopping-list-item').find('.table-col').eq(2).should(($el) => {
            const value = parseInt($el.text().trim());
            expect(value).to.be.greaterThan(0);
        })

    });
})