const sequelize = require('./db')
const path = require('path')
const fastify = require('fastify')({
    logger: true
})
fastify.register(require('fastify-cors'), {
    // put your options here
})
const {Product} = require('./models/model')
const models = require('./models/model')
const {log} = require("nodemon/lib/utils");
fastify.register(require('fastify-cors'), {})
fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'static'),
    prefix: '/images/', // optional: default '/'
})
fastify.get('/get_products', async (request, response) => {
    try {
        console.log(models)
        const a = await Product.findAll()
        response.send(a)
    } catch (e) {
        response.send(e)
    }
})

fastify.listen(8000, async function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    await sequelize.authenticate()
    await sequelize.sync()
    await fastify.log.info(`server listening on ${address}`)
})