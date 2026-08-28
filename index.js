//Package imports
const app = require('express')


//Server set up
const server = app()
server.listen(1008, '192.168.2.32', () => {
    console.log('server is running...')
})