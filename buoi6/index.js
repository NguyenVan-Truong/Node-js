const express = require('express');
const app  = express();
const port = 3000;

//Phân tích request từ form
const  bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//kết nối mongodb

  

const products = require('./routes/products');
app.use('/api/v1/products/',products);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
