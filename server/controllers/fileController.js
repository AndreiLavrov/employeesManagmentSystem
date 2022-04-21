// use 'employeesState' bellow instead of DB
const employeesState = {
  employees: [
    {
      id: '1',
      name: 'Alex1',
      status: 'ADDED',
    },
    {
      id: '2',
      name: 'Alex2',
      status: 'IN-CHECK',
    },
    {
      id: '3',
      name: 'Alex3',
      status: 'APPROVED',
    },
    {
      id: '4',
      name: 'Alex4',
      status: 'ACTIVE',
    },
    {
      id: '5',
      name: 'Alex5',
      status: 'INACTIVE',
    },
  ],
  setEmployees: function (newArr) {
    return this.employees = newArr;
  },
};

class FileController {
  async getEmployees(req, res) {
    try {
      return res.json(employeesState.employees);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }

  async changeEmployeeType(req, res) {
    try {
      const employee = req.body;
      if (!employee) return res.status(404).json({ message: "Bad request" });

      let formattedEmployees = employeesState.employees.map(item => {
        return item.id === employee.id ? employee : item;
      });
      employeesState.setEmployees(formattedEmployees);

      return res.json(formattedEmployees);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Can't change employees" });
    }
  }

  async addEmployee(req, res) {
    try {
      const employee = req.body;
      if (!employee) return res.status(404).json({ message: "Bad request" });

      employee.id = `${Date.now()}`;
      employee.status = 'ADDED';

      employeesState.employees.push(employee);

      return res.json(employeesState.employees);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Can't add employee" });
    }
  }
}

module.exports = new FileController();
