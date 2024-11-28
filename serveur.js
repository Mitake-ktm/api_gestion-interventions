const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/gestion-interventions',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.listen(300, () => console.log('Server running on port 3000'));
