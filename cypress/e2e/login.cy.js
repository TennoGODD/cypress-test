import LoginPage from '../pages/LoginPage';

describe('Тесты авторизации Swag labs', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  describe('Успешные сценарии', () => {
    it('Успешная авторизация с валидными данными', () => {
      LoginPage.loginAsStandartUser();
    });
  });

  describe('Неуспешные сценарии', () => {
    it('Неуспешная авторизация с неверным паролем', () => {
      LoginPage.loginAsLockedUser().checkErrorPasswordMessage();
    });

    it('Неуспешная авторизация с пустыми полями', () => {
      LoginPage.clickLogin().checkErrorFieldMessage();
    });
  });
});
