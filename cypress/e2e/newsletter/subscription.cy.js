describe('Newsletter subscription - test', () => {
    beforeEach(function () {
        cy.fixture('loginData').then(loginData => {
            this.loginData = loginData;

        })
    });
    it('Correct newsletter subscription', function () {
        cy.visit("");
        cy.get('#footer').find("li").contains("Newsletter").click()
        cy.url().should('equal', 'https://lp.morele.net/newsletter/');
        cy.get('.js--newsletter-focus').type(this.loginData.validUser.email);
        cy.get('.form-zgoda-text').eq(0).should('contain.text', "Wyrażam zgodę na przetwarzanie moich danych\n" +
            "osobowych w celu kontaktu dotyczącego promocji.").click();
        cy.get('.form-submit').eq(0).click()
        cy.get('.mn-body').should("contain.text", "Na podany adres e-mail wysłaliśmy Ci wiadomość z unikalnym kodem rabatowym, " +
            "który możesz wykorzystać na poniższy asortyment. Jeśli nie udało Ci się odnaleźć naszego maila - " +
            "sprawdź, czy nie trafił do folderu SPAM. Owocnych zakupów!");
        cy.url().should('equal', 'https://lp.morele.net/newsletter/?utm_campaign=kp&utm_medium=e-mail&utm_source=newsletter_ded00000000');
        cy.contains("Dziękujemy za zapisanie się do newslettera!").should('exist');
    })

    it('Newsletter subscription with no email', () => {

        cy.visit("https://lp.morele.net/newsletter/");
        cy.get('.js--newsletter-focus').type("onlyWord");
        cy.get('.form-zgoda-text').eq(0).should('contain.text', "Wyrażam zgodę na przetwarzanie moich danych\n" +
            "osobowych w celu kontaktu dotyczącego promocji.").click();
        cy.get('.form-submit').eq(0).click()
        cy.get('.mn-type-danger').should("contain.text", "Nieprawidłowy adres e-mail.");
        cy.contains("Dziękujemy za zapisanie się do newslettera!").should('exist');

    });

    it('Correct newsletter subscription without consent', function () {
        cy.visit("https://lp.morele.net/newsletter/");
        cy.get('.js--newsletter-focus').type(this.loginData.validUser.email);
        cy.get('.form-submit').eq(0).click();
        cy.get('.mn-body').should("contain.text", "Wymagana zgoda na przetwarzanie danych osobowych.");

    })

})