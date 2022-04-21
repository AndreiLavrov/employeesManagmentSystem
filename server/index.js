const express = require('express');
const path = require('path');

const employeesRouter = require('./routes/employees.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = 5000;

app.use(corsMiddleware);
app.use(express.json());
app.use('/employees', employeesRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
