class TopMenuPage {
    get afterLoginWelcomeButton() {
       return   cy.get("#header").find('.h-control-btn-label').contains("Witaj");
        // cy.get("#header").find('.h-control').eq(2).find('.icon-user')
    }
    get contactButton() {
        return cy.get("#header").find('.h-control-btn-label').contains("Kontakt");
    }
    get shoppingListButton() {
        return cy.get('div[data-load-content="ShoppingLists"]')
    }
  get loginButton() {
        return cy.get("#header").contains("Zaloguj się");
    }






}
export default new TopMenuPage();