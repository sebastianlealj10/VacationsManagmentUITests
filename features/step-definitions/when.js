import { When } from 'cucumber';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import CreatePage from '../pageobjects/create.page';
import findEmployee from '../../helpers/find.employee';

When(/^I login with (.+)$/, (username) => {
    LoginPage.login(username)
});

When(/I open the create new user page$/, () => {
    HomePage.createEmployee();
});

When(/^I fill the form with (.+) and (.+) and (.+) and (.+) and (.+)$/, (firstname, lastname, email, identification, leadername) => {
    CreatePage.createUser(firstname, lastname, email, identification, leadername);
});

When(/I delete the employee (.+)$/, (employeeToBeDeleted) => {
    const employees = HomePage.getEmployees();
    const employeeInfo = findEmployee(employees, employeeToBeDeleted);
    employeeInfo.$$('td')[8].click()
    browser.acceptAlert();
});