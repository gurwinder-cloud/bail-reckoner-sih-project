const express = require('express');
const mongoose = require('mongoose');
const mongoose = require('mongoose');
const bailRoutes = require('./routes/bail');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bailReckoner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use('/api/bail', bailRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Bail Reckoner API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
