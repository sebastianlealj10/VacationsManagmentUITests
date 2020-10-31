import { Then } from 'cucumber';
import HomePage from '../pageobjects/home.page';
import CreatePage from '../pageobjects/create.page';
import findEmployee from '../../helpers/find.employee';
const expectChai = require('chai').expect;

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(HomePage.flashNotice).toBeExisting();
});
Then(/^I should see the Logo is displayed$/, () => {
    expect(HomePage.logo).toBeExisting();
});

Then(/^I should see a message saying (.*)$/, (message) => {
    expect(CreatePage.Notice).toHaveTextContaining(message);
});

Then(/^I should see the employee (.*)$/, (employeeExpected) => {
    const employees = HomePage.getEmployees();
    const employeeInfo = findEmployee(employees, employeeExpected);
    expect(employeeInfo.$$('td')[0]).toHaveTextContaining(employeeExpected);
    expect(employeeInfo.$$('td')[1]).toHaveTextContaining("Smith");
    expect(employeeInfo.$$('td')[2]).toHaveTextContaining("1234567890");
    expect(employeeInfo.$$('td')[3]).toHaveTextContaining("Sebastian Leal");
    expect(employeeInfo.$$('td')[4]).toHaveTextContaining("01/22/2015");
});

Then(/^I should not see the employee (.*)$/, (employeeExpected) => {
    const employees = HomePage.getEmployees();
    const employeeInfo = findEmployee(employees, employeeExpected);
    expectChai(employeeInfo).to.be.undefined;
});