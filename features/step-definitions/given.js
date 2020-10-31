import { Given } from 'cucumber';
import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page';
import CreatePage from '../pageobjects/create.page';
const pages = {
    login: LoginPage,
    home: HomePage
}

Given(/^I am loggued in$/, () => {
    LoginPage.open();
    LoginPage.login();
    expect(HomePage.flashNotice).toBeExisting();
});

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open();
});

Given(/^I created a new user (\w+)$/, (username) => {
    HomePage.createEmployee();
    CreatePage.createUser(username);
});

