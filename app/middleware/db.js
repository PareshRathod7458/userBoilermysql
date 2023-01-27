const mysql = require('mysql');
const { logger } = require('../logger/logger');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'project'
});

connection.connect((err)=>{
    if(err)
    {
        console.warn("error")
    }
    else
    {
        console.warn('Connect to db...');
    }
});





module.exports = connection;


