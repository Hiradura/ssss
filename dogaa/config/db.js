const mysql = require('mysql2');
const { config } = require('./config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
    if (err) {
        console.error('Hiba a kapcsolódásnál:', err);
        return;
    }
    console.log('Sikeres kapcsolódás az adatbázishoz.');
});

module.exports = db;
