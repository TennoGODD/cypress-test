class InvenoryPage {
  constructor() {
    this.url = 'https://www.saucedemo.com';
    this.things = {
      backpack: '#add-to-cart-sauce-labs-backpack',
      tshirt: '#add-to-cart-sauce-labs-bolt-t-shirt',
      light: '#add-to-cart-sauce-labs-bike-light',
    };
    this.cartElement = '[data-test="shopping-cart-link"]';
  }
  visit() {
    cy.visit(this.url);
    return this;
  }

  addThings(things) {
    cy.get(things).click();
    return this;
  }

  addToCart() {
    this.addThings(this.things.backpack).addThings(this.things.tshirt).addThings(this.things.light);
    return this;
  }

  clickToCart() {
    cy.get(this.cartElement).click();
    return this;
  }
}

export default new InvenoryPage();
