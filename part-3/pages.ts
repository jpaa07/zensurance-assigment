import CartPage from './page-objects/cart.page';
import CheckoutCompletePage from './page-objects/checkout-complete.page';
import CheckoutInformationPage from './page-objects/checkout-information.page';
import CheckoutOverviewPage from './page-objects/checkout-overview.page';
import InventoryPage from './page-objects/inventory.page';
import LoginPage from './page-objects/login.page';

export class Pages {
  private login?: LoginPage;
  private inventory?: InventoryPage;
  private cart?: CartPage;
  private checkoutInformation?: CheckoutInformationPage;
  private checkoutOverview?: CheckoutOverviewPage;
  private checkoutComplete?: CheckoutCompletePage;

  constructor() {}

  public get Login(): LoginPage {
    return (this.login = this.login || new LoginPage());
  }

  public get Inventory(): InventoryPage {
    return (this.inventory = this.inventory || new InventoryPage());
  }

  public get Cart(): CartPage {
    return (this.cart = this.cart || new CartPage());
  }

  public get CheckoutInformation(): CheckoutInformationPage {
    return (this.checkoutInformation =
      this.checkoutInformation || new CheckoutInformationPage());
  }

  public get CheckoutOverview(): CheckoutOverviewPage {
    return (this.checkoutOverview =
      this.checkoutOverview || new CheckoutOverviewPage());
  }

  public get CheckoutComplete(): CheckoutCompletePage {
    return (this.checkoutComplete =
      this.checkoutComplete || new CheckoutCompletePage());
  }
}
