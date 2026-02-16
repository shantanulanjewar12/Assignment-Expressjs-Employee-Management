
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>


  <body>


    <div class="dashboard-buttons">

      <h2>Employee Management</h2>
      <p></p>
      <button onclick="window.location.href = 'addEmployee.jsp'">
        Add Employee
      </button>
      <button onclick="window.location.href = 'viewEmployee.jsp'">
        View Employees
      </button>

      <button onclick="logout()">Logout</button>

    </div>

    
    <script src="js/app.js"></script>
  </body>
</html> 
