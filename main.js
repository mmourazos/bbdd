const { getConnection, obtenEmpregadosCB, obtenEmpregadosA } = require('./mysql/mysqulconn')

const conn = getConnection()

obtenEmpregadosCB(conn, (empregados) => {
  console.log(empregados)
})

// sendToIface()

async function mostraEmpregados (conn) {
  const empregados = await obtenEmpregadosA(conn)
  sendToIface(empregados)
}

mostraEmpregados(conn)
