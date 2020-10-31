import Page from './page';
import getKeys from '../../helpers/fill.dates.helper';

class CreatePage extends Page {

    get formNewEmployee () { return $('#new_employee') }
    get Notice () { return $('#notice') }
    get inputFirstName () { return $('#employee_first_name') }
    get inputLastName () { return $('#employee_last_name') }
    get inputEmail () { return $('#employee_email') }
    get inputIdentification () { return $('#employee_identification') }
    get inputLeaderName () { return $('#employee_leader_name') }
    get btnCreateEmployee () { return $('input[type="submit"]') }
    get selectYear () { return $('#employee_start_working_on_1i') }
    get selectMonth () { return $('#employee_start_working_on_2i') } 
    get selectDay () { return $('#employee_start_working_on_3i') }

    createUser(firstName = 'James', lastname = 'Smith', email = 'James.Smith@mailinator.com', identification = '1234567890', leadername = 'Sebastian Leal') {
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastname);
        this.inputEmail.setValue(email);
        this.inputIdentification.setValue(identification);
        this.inputLeaderName.setValue(leadername);
        this.pickYear(2015);
        this.pickMonth(1);
        this.pickDay(21);
        this.btnCreateEmployee.click();

    }

    pickYear(year){
        const date = getKeys(year);
        this.selectYear.click()
        this.selectYear.keys(date);
    }

    pickMonth(month){
        const date = getKeys(month);
        this.selectMonth.click()
        this.selectMonth.keys(date);
    }

    pickDay(day){
        const date = getKeys(day);
        this.selectDay.click()
        this.selectDay.keys(date);
    }
}

export default new CreatePage();