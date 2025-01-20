const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

const port = 3000;

let jwt = require("jsonwebtoken");

const data = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "Sara", age: 53 },
  { id: 3, name: "Tom", age: 34 },
  { id: 4, name: "Bob", age: 45 },
  { id: 5, name: "Alice", age: 23 },
];

const passwords = [
  { username: "John", password: "123" },
  { username: "Sara", password: "456" },
];

app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = passwords.find((user) => user.username === username);
  if (user && user.password === password) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.send("Login failed", 401);
  }
});

// Middleware to verify token
const auth = (req, res, next) => {
  const token = req.cookies?.token;

  console.log("cookies are", req.cookies);

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save decoded token payload to req.user
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
};

app.get("/users", auth, (req, res) => {
  console.log("the user who called this route is", req.user);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
