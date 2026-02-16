<!DOCTYPE html>
<html>
  <head>
    <title>Add Employee</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>


  <body>

    <div>

      <h2>Add Employee</h2>

      <form  id="employeeForm"  class="form-group">
        <input type="text" id="name" placeholder="Employee Name" required />
        <input type="text" id="department" placeholder="Department" required />
        <input type="number" id="salary" placeholder="Salary" required />
        <button type="submit">Add</button>
      </form>

      <button onclick="window.location.href = 'dashboard.jsp'">Back</button>

    </div>

    <script src="js/app.js"></script>

  </body>


</html>
