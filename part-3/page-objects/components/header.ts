export default class Header {
  
    constructor() {
    }
  
    private container(): ReturnType<WebdriverIO.Browser['$']> {
      return $('.primary_header');
    }

    private goToCartButton(): ReturnType<WebdriverIO.Browser['$']> {
        return this.container().$('.shopping_cart_link');
      }
  
    public async goToCart(): Promise<void> {
      await this.container().waitForDisplayed();
      await this.goToCartButton().click();
    }
  }
  