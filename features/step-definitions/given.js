import { Given } from 'cucumber';
import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';
const pages = {
    login: LoginPage,
    home: HomePage
}

Given(/^I am loggued in$/, () => {
    LoginPage.open();
    LoginPage.login();
});

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open();
});

