import Page from './page';
import getPassword from '../../helpers/credentials.helper';

class LoginPage extends Page {

    get inputUsername () { return $('#user_email') }
    get inputPassword () { return $('#user_password') }
    get btnSubmit () { return $('input[type="submit"]') }

    login (username = "gap-automation-test@mailinator.com") {
        const password = getPassword(username);
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('users/sign_in');
    }
}

export default new LoginPage();