import { Page } from './page';

export default class CheckoutInformationPage extends Page {
  constructor() {
    super('checkout-step-one.html');
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#checkout_info_container');
  }

  private firstNameInput(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#first-name');
  }

  private lastNameInput(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#last-name');
  }

  private zipCodeInput(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#postal-code');
  }

  private continueButton(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#continue');
  }

  public async enterInformation(
    firstName: string,
    lastName: string,
    zipCode: string
  ): Promise<void> {
    await this.container().waitForDisplayed();
    await this.firstNameInput().setValue(firstName);
    await this.lastNameInput().setValue(lastName);
    await this.zipCodeInput().setValue(zipCode);
  }

  public async goToCheckoutOverview(): Promise<void> {
    await this.container().waitForDisplayed();
    await this.continueButton().click()
  }

  public isDisplayed(): Promise<boolean> {
    return this.container().isDisplayed();
  }
}
