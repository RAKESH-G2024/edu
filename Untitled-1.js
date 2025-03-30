const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get("/", (req, res) => {
    res.send("EduLearn Hub Backend is Running");
});

// Sample login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
