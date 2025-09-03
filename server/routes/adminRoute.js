

const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // 🔑 load .env

const router = express.Router();

// env se values le rahe hain
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

// ---- LOGIN route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ error: "Invalid username or password" });
});

// ---- Protected test route
router.get("/dashboard", (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ error: "Forbidden" });
    res.json({ message: "Welcome Admin! Dashboard access granted ✅" });
  } catch (err) {
    res.status(401).json({ error: "Invalid/expired token" });
  }
});

module.exports = router;

