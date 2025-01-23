const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Utilisez `module.exports` au lieu de `export default`
module.exports = app;