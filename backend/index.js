const app = require('./src/server')
const PORT = 5000

app.listen(PORT, ()=> {console.log(`listenning on port ${PORT}`)})