const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // change if your MySQL user is different
  password: "", // add your MySQL password if set
  database: "healthi",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Register endpoint
app.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }
  const sql =
    "INSERT INTO login (name, email, password, confirmPassword) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, password, confirmPassword], (err, result) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res
        .status(500)
        .json({ message: "Database error", error: err.message });
    }
    res.status(201).json({ message: "User registered successfully." });
  });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
