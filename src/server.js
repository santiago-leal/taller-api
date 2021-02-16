const express = require('express');
const app = express();

// Routes
const routes = require('./routes/routes');
const taskRoutes = require('./routes/task-routes');

// Settings
app.set('port', process.env.PORT || 3000);

// Use Routes
app.use(routes);
app.use('/task', taskRoutes);

module.exports = app;