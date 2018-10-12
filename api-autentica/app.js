const app_config = require('./config/app_config')
const db_config = require('./config/db_config')
const produto = require('./models/produto')
const produtoController = require('./controller/produtoController')

const produtoRoute = require('./routes/produtoRoute')

const usuarioRoute = require('./routes/usuarioRoute')

app_config.use('/produto', produtoRoute)
app_config.use('/usuario', usuarioRoute)


