const express = require('express')
const recipersRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())



server.use('/api/recipes', recipersRouter)

server.use('*', (req, res) => {
    res.json({ api: 'up'})
})

module.exports = server

