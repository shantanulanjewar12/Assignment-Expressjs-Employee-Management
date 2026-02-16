const BASE_URL = "http://localhost:4000/api/users";



/* for REGISTER  */

function initRegister()
 {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const user = 
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };


    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });


    const data = await response.json();
    alert(data.message);


    if (data.message === "Registration successful") 
    {
      window.location.href = "login.jsp";
    }


  });
}



/* for  LOGIN  */
function initLogin() 
{
  const form = document.getElementById("loginForm");
  if (!form) return;


  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const userData = 
    {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };


    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    alert(data.message);


    if (data.message === "Login successful") {
      localStorage.setItem("loggedUser", JSON.stringify(data.user));
      window.location.href = "dashboard.jsp";
    }

  });
}



/* for DASHBOARD  */
function initDashboard()
 {

  const welcomeMessage = document.getElementById("welcomeMessage");
  if (!welcomeMessage) return;

  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (user) 
    {
    welcomeMessage.innerText = "Hello, " + user.name + " (" + user.email + ")";
  } else {
    window.location.href = "login.jsp";
  }
}


// For logout
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.jsp";
}



// For Emplyeee CRUD
function initAddEmployee()
 {

  const form = document.getElementById("employeeForm");

  if (!form) return;


  form.addEventListener("submit",  async function (e) {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("loggedUser"));

    const employee = 
    {
      name: document.getElementById("name").value,
      department: document.getElementById("department").value,
      salary: document.getElementById("salary").value,
      created_by: user.id,
    };


    const response = await fetch("http://localhost:4000/api/employees/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });


    const data = await response.json();


    alert(data.message);  // for a popup message 

    window.location.href = "dashboard.jsp";

  });
}



function initViewEmployees()
{

  const table = document.getElementById("employeeTable");

  if (!table) return;


  fetch("http://localhost:4000/api/employees/all")
    .then((res) => res.json())
    .then((data) => {

    let html = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Dept</th>
        <th>Salary</th>
        <th>Action</th>
    </tr>
    `;

    
      data.forEach((emp) => {
        html = html + `
          <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td><button onclick="deleteEmployee(${emp.id})">Delete</button></td>
          </tr>`;
      });


      table.innerHTML = html;

    });

}


function deleteEmployee(id) 
{
  fetch(`http://localhost:4000/api/employees/delete/${id}`, {
    method: "DELETE",
  }).then(() => location.reload());
}



/*  to intialize functions  */
document.addEventListener("DOMContentLoaded", function () {
  initRegister();
  initLogin();
  initDashboard();

  initAddEmployee();
initViewEmployees();

});
