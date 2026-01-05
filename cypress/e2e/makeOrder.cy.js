import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';

describe('Путь от главной страницы к оформлению заказа', () => {
  beforeEach(() => {
    InventoryPage.visit();
  });
  it('Полнуй путь пользователя', () => {
    LoginPage.loginAsStandartUser();
    InventoryPage.addToCart().clickToCart();
  });
});
