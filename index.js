const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const routes = require('./routes/routes')

const sequelize = new Sequelize('library', 'root', 'library', {
  host: 'database_container',
  dialect: 'mysql'
});

app.use(routes);

async function launch() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('Server has been started');
    })
  } catch (error) {
    console.error(error);
  }
}


launch();