const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(routes);

async function launch() {
  try {
    app.listen(3000, () => {
      console.log('Server has been started');
    })
  } catch (error) {
    console.error(error);
  }
}


launch();