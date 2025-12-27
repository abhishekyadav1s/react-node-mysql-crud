const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abhishek@123",
  database: "abhidb"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// Test API
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});




// CREATE USER
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.send("User added successfully");
  });
});

// READ USERS
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.send(result);
  });
});

// UPDATE USER
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const sql =
    "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.send("User updated successfully");
  });
});

// DELETE USER
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }
    res.send("User deleted successfully");
  });
});

