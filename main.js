let express = require('express');
require('dotenv').config();
let cookieParser = require('cookie-parser');
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
let mongoose = require('mongoose');
const router = require('./Router/main');
app.use(router);

mongoose.connect(process.env.DB_url).then(() => {
  console.log('Database Connected');
});

app.listen(process.env.SARVER_PORT || 4500, () => {
  console.log('Server is running');
});
