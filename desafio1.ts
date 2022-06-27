interface IEmployee {
  code: number;
  name: string;
}

let employee: IEmployee = {
  code: 2,
  name: 'Andre',
};

employee.code = 10;
employee.name = 'John';
