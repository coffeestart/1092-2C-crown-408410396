const mysql = require('mysql2');

// create data basethe connection
const pool = mysql.createConnection({
    host:'us-cdbr-east-03.cleardb.com',
    user: 'b1893bff9019d5',
    password: '158ec2db',
    database: 'heroku_59ef968415bcc9e'
   }
 );

 module.exports = pool.promise();