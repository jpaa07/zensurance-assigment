import Header from './components/header';
import ProductCard from './components/product-card';
import { Page } from './page';

export default class InventoryPage extends Page {

    private header: Header

  constructor() {
    super('inventory.html');
    this.header = new Header()
  }

  private container(): ReturnType<WebdriverIO.Browser['$']> {
    return $('#inventory_container');
  }

  private productsList(): ReturnType<WebdriverIO.Browser['$$']> {
    return this.container().$$('.inventory_item');
  }

  public async addProductToCar(productName: string): Promise<void> {
   const product = await this.getProductByName(productName) 
   await product.addToCart()
  }

  public async goToCart(): Promise<void> {
    await this.header.goToCart()
  }

  public isDisplayed(): Promise<boolean> {
    return this.container().isDisplayed()
  }

  private async getProductByName(name: string): Promise<ProductCard> {
    for (const product of await this.productsList()) {
        if ((await product.$('.inventory_item_name').getText()) === name) {
            return new ProductCard(this.productsList()[product.index])
        }
    }
  }

}