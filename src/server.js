const express = require('express');
const cors = require('cors');
const app = express();
require('./Route/index')(app);

app.use(cors());
app.use(express.json());
app.listen(3333);