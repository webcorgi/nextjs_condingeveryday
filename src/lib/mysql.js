// lib/mysql.js
import mysql from 'mysql2/promise';

// MySQL 연결 정보
const connection = mysql.createPool({
    host: 'onedev.i234.me',
    user: 'dh',
    password: 'qAZ7221200!',
    database: 'dh'
});

export default connection;