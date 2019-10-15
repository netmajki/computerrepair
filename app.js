const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(morgan('dev'));
app.use(express.static('public'));

require("./routes.js")(app);

app.listen(port);
console.log(`Running on port ${port}`)