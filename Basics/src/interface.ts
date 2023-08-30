interface Emp {
    name: string;
}

interface Employee extends Emp {
    empNo: number;
}

const emp1: Employee = {
    name: "John",
    empNo: 1,
}
