export default class CartItem {
    private container: ReturnType<WebdriverIO.Browser['$']>;
  
    constructor(container: ReturnType<WebdriverIO.Browser['$']>) {
      this.container = container;
    }
  
    private removeButton(): ReturnType<WebdriverIO.Browser['$']> {
      return this.container.$('.btn_secondary');
    }
  
    public async removeFromCart(): Promise<void> {
      await this.container.waitForDisplayed();
      await this.removeButton().click();
    }
  }
  