const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'users.json');

app.use(cors());
app.use(express.json());

// Helper to read users from file
function readUsers() {
  if (!fs.existsSync(DB_FILE)) return [];
  const data = fs.readFileSync(DB_FILE, 'utf-8');
  return data ? JSON.parse(data) : [];
}

// Helper to write users to file
function writeUsers(users) {
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
}

// Register endpoint
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'Email already registered.' });
  }
  users.push({ name, email, password });
  writeUsers(users);
  res.status(201).json({ message: 'User registered successfully.' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
