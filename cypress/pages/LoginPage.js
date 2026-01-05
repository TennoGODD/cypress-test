class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/';

    this.elements = {
      userNameField: '#user-name',
      passwordField: '#password',
      loginButton: '#login-button',
      errorMessage: '[data-test="error"]',
    };

    this.users = {
      standart: {
        username: 'standard_user',
        password: 'secret_sauce',
      },

      locked: {
        username: 'standard_user',
        password: 'wrong_password',
      },
    };

    this.errorMessage = {
      errorPassowrd: 'Epic sadface: Username and password do not match any user in this service',
      errorField: 'Epic sadface: Username is required',
    };
  }

  visit() {
    cy.visit(this.url);
    return this;
  }

  typeUserName(userName) {
    cy.get(this.elements.userNameField).type(userName);
    return this;
  }

  typePassword(password) {
    cy.get(this.elements.passwordField).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.elements.loginButton).click();
    return this;
  }

  login(userName, password) {
    this.typeUserName(userName).typePassword(password).clickLogin();
    return this;
  }

  loginAsStandartUser() {
    return this.login(this.users.standart.username, this.users.standart.password);
  }

  loginAsLockedUser() {
    return this.login(this.users.locked.username, this.users.locked.password);
  }

  checkUrl(urlPage) {
    cy.url().should('include', urlPage);
    return this;
  }

  checkErrorMessage(message) {
    cy.get(this.elements.errorMessage).should('contain', message);
    return this;
  }

  checkErrorPasswordMessage() {
    return this.checkErrorMessage(this.errorMessage.errorPassowrd);
  }

  checkErrorFieldMessage() {
    return this.checkErrorMessage(this.errorMessage.errorField);
  }
}

export default new LoginPage();
