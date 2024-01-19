document.addEventListener('DOMContentLoaded', () => {
    // Load employee data from local storage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    displayEmployees(employees);
  });
  
  function displayEmployees(employees) {
    const totalEmployeesElem = document.getElementById('totalEmployees');
    const availableEmployeesElem = document.getElementById('availableEmployees');
    const employeeListElem = document.getElementById('employeeList');
  
    // Clear existing content
    employeeListElem.innerHTML = '';
  
    // Display employee count
    totalEmployeesElem.textContent = employees.length;
    const availableEmployees = employees.filter(employee => employee.available).length;
    availableEmployeesElem.textContent = availableEmployees;
  
    // Display employee list
    employees.forEach(employee => {
      const row = document.createElement('div');
      row.classList.add('employee-row');
      row.innerHTML = `
        <span>${employee.name}</span>
        <span>${employee.designation}</span>
        <span>${employee.department}</span>
        <span>${employee.age}</span>
        <span>${employee.available ? 'Available' : 'Not Available'}</span>
        <button onclick="editEmployee(${employee.id})">&#9998;</button>
        <button onclick="deleteEmployee(${employee.id})">&#128465;</button>
      `;
      employeeListElem.appendChild(row);
    });
  }
  
  function openAddEmployeeModal() {
    const modal = document.getElementById('addEmployeeModal');
    // Display modal for adding employee
    // Modal content and functionality will be implemented here
  }
  
  function editEmployee(employeeId) {
    // Logic for editing employee details
    // Modal for editing employee will be implemented here
  }
  
  function deleteEmployee(employeeId) {
    // Logic for deleting employee
    // Confirmation prompt and delete functionality will be implemented here
  }