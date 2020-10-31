export default function findEmployee(employees, employeeExpected)
{
    const employee = employees.find(myFunction);
    function myFunction(employee)
    {
        const name = employee.$$('td')[0].getText();
        if (name == employeeExpected)
        {
            return employee.$$('td')[0];
        }
    };
    return employee;
};