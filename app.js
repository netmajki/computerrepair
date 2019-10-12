const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

require("./routes.js")(app);

app.listen(3000);