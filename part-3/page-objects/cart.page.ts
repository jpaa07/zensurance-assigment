import CartItem from './components/cart-item';
import { Page } from './page';

export default class CartPage extends Page {

  constructor() {
    super('cart.html');
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#cart_contents_container');
  }

  private productsList(): ReturnType<WebdriverIO.Browser['$$']> {
    return this.container().$$('.cart_item');
  }

  private checkoutButton(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#checkout');
  }

  public async waitForExpectedItemsCount(expectedItems: number): Promise<void> {
    await browser.waitUntil(
      async () => (await this.productsList()).length === expectedItems
    );
  }

  public async goToCheckoutInformation(): Promise<void> {
    await this.container().waitForDisplayed();
    await this.checkoutButton().click();
  }

  public async removeProductFromCart(name: string): Promise<void> {
    const product = await this.getCartItemByName(name)
   await product.removeFromCart()
  }


  public isDisplayed(): Promise<boolean> {
    return this.container().isDisplayed();
  }

  private async getCartItemByName(name: string): Promise<CartItem> {
    for (const product of await this.productsList()) {
      if ((await product.$('.inventory_item_name').getText()) === name) {
        return new CartItem(this.productsList()[product.index]);
      }
    }
  }
}
