const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'bz5myt6cxympscsa9tg6-mysql.services.clever-cloud.com',
    user: 'u5gguq1wsjs9y2xq',
    password: '7KcSTHvlpQFlvvwJ7fKL',
    database: 'bz5myt6cxympscsa9tg6'
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