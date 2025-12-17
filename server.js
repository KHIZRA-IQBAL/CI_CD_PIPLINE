require('dotenv/config');
const express = require('express');
const {connectMongoDb} = require('./db/connection');
const userRoute = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
connectMongoDb(process.env.MONGO_URI);

// Health Check Route (Required for AWS Load Balancers/Health Checks)
app.get('/', (req, res) => {
    res.status(200).send("Health Check Passed: Server is Active!");
});

app.use('/users',userRoute);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));