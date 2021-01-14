// Set up mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'bootcamp',
    database: 'burgers_db'
});

// make connection
connection.connect((err) => {
    if (err) {
        console.log(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connect.threadId}`);
});

// Export connection
module.exports = connection;