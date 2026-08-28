//Package imports
const app = require('express')


//Server set up
const server = app()
const PORT = 1007
const HOSTNAME = '0.0.0.0.'

server.listen(PORT, HOSTNAME, () => {
console.log('Server is running in ${HOSTNAME}:${PORT}')
})

let data =[
{
    id: 1, 
    name: 'Dog',
},
{
    id: 2,
    name: 'Cat',
},
{
    id: 3,
    name: 'Fish',
},







]
