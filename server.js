const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const { connectDatabase } = require("./src/db/db");
const trackerRoutes = require("./src/routes/trackerRoutes");

const app = express();

app.use(express.json());

connectDatabase();

app.use("/api/tracker", trackerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
