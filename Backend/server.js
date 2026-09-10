// bw3s4oksYGuoz7o0
// shaikhnaqeeb368_db_user
// mongodb+srv://<db_username>:bw3s4oksYGuoz7o0@cluster0.j6wlkmg.mongodb.net/

require ("dotenv") .config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const contactRoutes = require("./routes/contactRoutes");
// const { use } = require("react");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
    res.send("LearnHub API is running");
});

const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI)
.then (() => {
    console.log("MongoDB Atlas connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
.catch((err) => console.error("MongoDB connection error:", err.message));