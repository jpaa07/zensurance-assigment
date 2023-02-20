import { Page } from './page';

export default class CheckoutOverviewPage extends Page {
  constructor() {
    super('checkout-step-two.html');
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#checkout_summary_container');
  }

  private finishButton(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#finish');
  }


  public async goToCheckoutComplete(): Promise<void> {
    await this.container().waitForDisplayed();
    await this.finishButton().click()
  }

  public isDisplayed(): Promise<boolean> {
    return this.container().isDisplayed();
  }
}
