import { When } from 'cucumber';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import CreatePage from '../pageobjects/create.page';

When(/^I login with (.+)$/, (username) => {
    LoginPage.login(username)
});

When(/I open the create new user page$/, () => {
    HomePage.createEmployee();
});

When(/^I fill the form with (.+) and (.+) and (.+) and (.+) and (.+)$/, (firstname, lastname, email, identification, leadername) => {
    CreatePage.create(firstname, lastname, email, identification, leadername);
});
