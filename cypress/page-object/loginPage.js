class LoginPage {
    get emailField() {
        return cy.get('#username');
    }

    get passwordField() {
        return cy.get('#password-log');
    }

    get loginButton() {
        return cy.get("form[id='login_form'] button[class='btn btn-primary-2']");
    }

    login(email, password) {
        this.emailField.type(email).should('have.value', email);
        this.passwordField.type(password).should('have.value', password);
        this.loginButton.should('be.visible').click();

    }
}

export default new LoginPage();