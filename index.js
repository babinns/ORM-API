const express = require('express');
const routes = require('./api/routes')

const app = express();
const port = 3001;

routes(app)

app.listen(port, () => console.log(`server is running on door ${port}`))