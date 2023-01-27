const express = require('express');
const multer = require('multer');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./app/middleware/db');
const bodyParser =  require('body-parser');
const dotenv = require('dotenv')
dotenv.config();
const routes = require('./app/routes/usreRoutes');
const contactRoutes = require('./app/routes/contactRoutes');
const testRoutes = require('./app/routes/testRoutes');
const categoryRoutes = require('./app/routes/categoryRoutes');
const portfolioRoutes = require('./app/routes/portfolioRoutes');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/',routes);
app.use('/',contactRoutes);
app.use('/',testRoutes)
app.use('/',categoryRoutes);
app.use('/',portfolioRoutes);




app.use(express.static("app/uploads"));
app.listen(5500, ()=> console.log(`Listing port on 5500..`));
