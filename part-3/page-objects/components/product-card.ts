export default class ProductCard {
  private container: ReturnType<WebdriverIO.Browser['$']>;

  constructor(container: ReturnType<WebdriverIO.Browser['$']>) {
    this.container = container;
  }

  private addToCartButton(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container.$('.btn_primary');
  }

  public async addToCart(): Promise<void> {
    await this.container.waitForDisplayed();
    await this.addToCartButton().click();
  }
}
