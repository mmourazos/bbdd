const mysql = require('mysql')

// Datos de configuración de la conexión.
const connConf = {
  host: 'localhost',
  user: 'myUser',
  password: 'myPass',
  database: 'myDatabase'
}

const connection = mysql.createConnection(connConf)

// Establecer la conexión con la base de datos
connection.connect()

function getConnection () {
  return connection
}

// Funciones para realizar consultas:

connection.query('SELECT * FROM empregados', function (error, results, _fields) {
  if (error) {
    console.error(error)
  } else {
    console.log(results)
  }
})

// Con función de *callback*
// Invocaremos a la funcion fCallback con "results" como único parámetro.
function obtenEmpregadosCB (conn, fCallback) {
  conn.query('SELECT * FROM empregados', (error, results, fields) => {
    if (error) {
      console.log(error)
    } else {
      fCallback(results)
    }
  })
}

// Con *async* y *await*
async function obtenEmpregadosA (conn) {
  try {
    const results = await new Promise((resolve, reject) => {
      conn.query('SELECT * FROM empregados', (error, results, _fields) => {
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
    return results
  } catch (error) {
    console.log(error)
  }
}

// Sacar empleado por pantalla usando *callback*.
function listaEmpregadosCB (conn) {
  obtenEmpregadosCB(conn, (empregados, _fields) => {
    console.log(empregados)
  })
}

listaEmpregadosCB(connection)

// Sacar empleados por pantalla usando la función asíncrona.
async function listaEmpregadosA (conn) {
  const empregados = await obtenEmpregadosA(conn)
  console.log(empregados)
  return empregados
}

listaEmpregadosA(connection)

module.exports = { getConnection, obtenEmpregadosA, obtenEmpregadosCB }
