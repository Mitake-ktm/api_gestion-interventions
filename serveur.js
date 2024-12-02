const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(bodyParser.json());

app.use(cors());

app.use('/api/tasks', taskRoutes);

mongoose.connect('mongodb://localhost:27017/gestion-interventions')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(3000, () => console.log('Server running on port 3000'));
