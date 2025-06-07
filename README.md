<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dashboard</title>
  <link rel="stylesheet" href="dashboardstyle.css" />
</head>
<body>
  <div class="dashboard-container">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </aside>
    
    <main class="main-content">
      <header>
        <h1>Welcome, User</h1>
        <button id="themeToggle">Toggle Theme</button>
      </header>

      <section class="cards">
        <div class="card">
          <h3>Users</h3>
          <p>0</p>
        </div>
        <div class="card">
          <h3>Sales</h3>
          <p>$0</p>
        </div>
        <div class="card">
          <h3>Visits</h3>
          <p>0</p>
        </div>
      </section>
    </main>
  </div>

  <script src="dashboardscript.js"></script>
</body>
</html>
