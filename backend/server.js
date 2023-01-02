require("dotenv").config();
const cors = require("cors");
const express = require("express");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("root");
});

app.use("/api/user", userRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        console.log("listening for requests");
    });
});
