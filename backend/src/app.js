const express = require('express');
const path = require('path');
const postRouter = require('./routes/post')
const authRouter = require("./routes/auth");

require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use("/user", authRouter);
app.use(postRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../frontend/build'));
    app.get('*',(req, res) => {
      res.sendFile(path.resolve(__dirname,'../','../','frontend','build','index.html'))
    })
  }

  
app.listen(port, () => {
    console.log('server listening on port ' + port)
})
