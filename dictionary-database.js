var mysql = require('mysql');

exports.database = () => {
    return mysql.createConnection({
        host: 'localhost',
        database: 'entries',
        user: 'root',
        password: 'rootroot'
    })
};
