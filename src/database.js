const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b44b2c167ad95c',
    password: '54af1960',
    database: 'heroku_1a61b48585362a7'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;

    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;