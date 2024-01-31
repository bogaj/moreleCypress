import LoginPage from "../../page-object/loginPage";
import TopMenuPage from "../../page-object/topMenuPage";

describe('Correct login tests', function () {

    beforeEach(function () {
        cy.fixture('loginData').then(loginData => {
            this.loginData = loginData;

        })
    });

    it('Correct login test', function () {
        cy.visit("");
        TopMenuPage
            .loginButton
            .click();
        LoginPage.login(this.loginData.validUser.email, this.loginData.validUser.password);
        cy.url().should('equal', 'https://www.morele.net/');
        /*cy.get('span[class="h-control-btn-label"]').should("contain","\nWitaj\n")
        cy.get('span[class="h-control-btn-label"]').should("contain","\nWitaj\n")*/
        TopMenuPage
            .afterLoginWelcomeButton
            .should('have.text', "\nWitaj\n");

    })
    it('Correct login and logout test', function () {
        cy.visit("");
        TopMenuPage
            .loginButton
            .click();
        LoginPage.login(this.loginData.validUser.email, this.loginData.validUser.password);
        cy.url().should('equal', 'https://www.morele.net/');

        TopMenuPage
            .afterLoginWelcomeButton
            .should("have.text", "\nWitaj\n")
            .trigger("focus");
        cy.get(".un-logout").click();
        TopMenuPage
            .loginButton
            .should("have.text", "\nZaloguj się\nZałóż konto\n")
    })
})