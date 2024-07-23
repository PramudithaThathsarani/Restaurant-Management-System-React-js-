const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes');
const employeeRoutes = require('./routes/employeeRouter'); // Ensure this path is correct
const eventRoutes = require('./routes/eventRouter');
const feedbackRoutes = require('./routes/feedbackRouter');
const menuRouter = require('./routes/menuRoutes');

// const menu = require('./routes/menuRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connection successful!");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', employeeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/menuItems', menuRouter);
// app.use('/api/menus', menu);

// Static images folder
app.use("/images", express.static("./images"));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
