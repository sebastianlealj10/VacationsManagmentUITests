import Page from './page';

class HomePage extends Page {

    get flashNotice () { return $('.flash_notice') }
    get logo () { return $('#logo') }
    get createNewEmployee () { return $('a[href="/employees/new"]') }

    getEmployees()
    {
        const employees = $$('tr');
        return employees.slice(1,employees.length);;
    }

    createEmployee () {
        this.createNewEmployee.click(); 
    }

    open () {
        return super.open('employees');
    }
}

export default new HomePage();
