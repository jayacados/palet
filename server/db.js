// connects our postgres database to our server

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jimmyphong',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'palet'
})

module.exports = pool;