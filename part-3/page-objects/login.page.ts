import { Page } from './page';

export default class LoginPage extends Page {
  constructor() {
    super('');
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('.login_wrapper');
  }

  private usernameInput(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#user-name');
  }

  private passwordInput(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#password');
  }

  private loginButton(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('#login-button');
  }

  private errorContainer(): ReturnType<WebdriverIO.Browser['$']> {
    return this.container().$('[data-test="error"]');
  }

  public async login(username: string, password: string) {
    await this.container().waitForDisplayed()
    await this.usernameInput().setValue(username)
    await this.passwordInput().setValue(password)
    await this.loginButton().click()
  }

  public getError(): Promise<string> {
    return this.errorContainer().getText();
  }
}