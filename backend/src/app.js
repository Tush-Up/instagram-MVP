const express = require('express');
const postRouter = require('./routes/post')
require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(postRouter)

app.listen(port, () => {
    console.log('server listening on port ' + port)
})
