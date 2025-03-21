const express = require("express");

const cors = require("cors");

const router = require("./routes/TaskRoutes")

const mongoose = require("mongoose")
require("dotenv").config()

const app = express();

const port = process.env.PORT

app.use(express.json());
app.use(cors());

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use("/api" , router)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})