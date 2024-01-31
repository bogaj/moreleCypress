import LoginPage from "../../page-object/loginPage";

describe('Incorrect login tests', function () {

    beforeEach(function () {
        /*cy.clearCookies();
        cy.clearLocalStorage();*/
        cy.fixture('loginData').then(loginData => {
            this.loginData = loginData;

        })
    });

    it('Incorrect login with invalid all data', function () {
        cy.visit("/login")
        LoginPage.login(this.loginData.invalidUser.email, this.loginData.invalidUser.password);
        cy.get('.mn-body').should('be.visible')
        cy.get('.mn-body').should('have.text',"Dane logowania nie są poprawne. Zalogowanie nie powiodło się.");
    });
    it('Incorrect login with invalid password', function () {
        cy.visit("/login")
        LoginPage.login(this.loginData.validUser.email, this.loginData.invalidUser.password);
        cy.get('.mn-body').should('be.visible')
        cy.get('.mn-body').should('have.text',"Dane logowania nie są poprawne. Zalogowanie nie powiodło się.");
    });
    it('Incorrect login with invalid email and correct password', function () {
        cy.visit("/login")
        LoginPage.login(this.loginData.invalidUser.email, this.loginData.validUser.password);
        cy.get('.mn-body').should('be.visible')
        cy.get('.mn-body').should('have.text',"Dane logowania nie są poprawne. Zalogowanie nie powiodło się.");
    });
    it('Incorrect login with email without @', function () {
        cy.visit("/login")
        LoginPage.login("przykladowyNick", this.loginData.validUser.password);
        cy.get('.form-control-error').should('have.text',"Podaj poprawny adres e-mail!")
    });
})