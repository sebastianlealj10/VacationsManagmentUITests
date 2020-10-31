import { Then } from 'cucumber';
import HomePage from '../pageobjects/home.page';
import CreatePage from '../pageobjects/create.page';

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(HomePage.flashNotice).toBeExisting();
});
Then(/^I should see the Logo is displayed$/, () => {
    expect(HomePage.logo).toBeExisting();
});

Then(/^I should see a message saying (.*)$/, (message) => {
    expect(CreatePage.Notice).toBeExisting();
});