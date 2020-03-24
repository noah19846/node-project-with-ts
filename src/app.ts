const express = require('express')
const port = 3333

function startServer() {
  const app = express()

  app.listen(port, (err: any) => {
    if (err) {
      console.error(err)
      process.exit(1)
      return
    }
    console.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️ 
      ################################################
    `)
  })
}

startServer()
