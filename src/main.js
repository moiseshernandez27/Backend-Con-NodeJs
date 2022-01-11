import app from './server.js'

const PORT =Process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http run on port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
