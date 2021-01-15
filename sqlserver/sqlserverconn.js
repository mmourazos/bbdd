const mssql = require('mssql')

const connConfig = {
  user: 'root', // Modificar como corresponda
  server: 'localhost',
  password: '123abc.', // Modificar como corresponda
  database: 'sqlserver' // Modificar como corresponda
}

async function getConnection(config = connConfig) {
  try {
    const pool = await mssql.connect(config)
    return await pool.request()
  } catch (err) {
    console.log(err)
  }
}

async function doSelect(conn, sql_select) {
  return await con
}

module.exports = { getConnection }
