import { Page } from './page';

export default class CheckoutCompletePage extends Page {
  constructor() {
    super('checkout-complete.html');
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#checkout_complete_container');
  }

  public isDisplayed(): Promise<boolean> {
    return this.container().isDisplayed();
  }
}