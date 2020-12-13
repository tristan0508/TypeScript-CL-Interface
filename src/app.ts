class Department {
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
        
    }

    describe(this: Department) {
        console.log(`Department: ${this.id}  ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;

    }
}


const it = new ITDepartment(1, ['Tristan']);

it.describe();

it.addEmployee('Tristan');
it.addEmployee('Kayla');

it.printEmployeeInfo();