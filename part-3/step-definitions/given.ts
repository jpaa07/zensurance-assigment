import { Given } from '@wdio/cucumber-framework';
import { Pages } from '../pages';

const pages = new Pages()

Given(/^I am on the login page$/, async () => {
    await pages.Login.open()
});