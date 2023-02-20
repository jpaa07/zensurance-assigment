import { When } from '@wdio/cucumber-framework';
import { Pages } from '../pages';

const pages = new Pages()

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await pages.Login.login(username, password)
});

When(/^I add (.+) to the cart$/, async (productName) => {
    await pages.Inventory.addProductToCar(productName)
    await pages.Inventory.goToCart()
    await pages.Cart.waitForExpectedItemsCount(1)
    await pages.Cart.goToCheckoutInformation()
});

When(/^I enter my personal information (\w+) (\w+) and (\w+)$/, async (firstName, lastName, zipCode) => {
    await pages.CheckoutInformation.enterInformation(firstName, lastName, zipCode)
    await pages.CheckoutInformation.goToCheckoutOverview()
    await pages.CheckoutOverview.goToCheckoutComplete()
});