import { Then } from '@wdio/cucumber-framework';
import { Pages } from '../pages';

const pages = new Pages()

Then(/^I should see Inventory page$/, async () => {
    expect(await pages.Inventory.isDisplayed()).toBeTruthy()
});

Then(/^I should see the checkout completed message$/, async () => {
    expect(await pages.CheckoutComplete.isDisplayed()).toBeTruthy()
});

Then(/^I should see (.+) on the login page$/, async (error) => {
    expect(await pages.Login.getError()).toContain(error)
});