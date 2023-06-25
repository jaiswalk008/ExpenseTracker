const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const app = express();

const expenseRoutes = require('./routes/expenseRoutes')

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expenseRoutes);

async function startServer() {
    try {
      await sequelize.sync();
      app.listen(3000);
    } catch (err) {
      console.error(err);
    }
  }
  
startServer();
