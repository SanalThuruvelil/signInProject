const express = require('express');
const router = express.Router();
const path = require('path');
const staticFilePath = path.join(__dirname, '../programs')
const app = express();

app.get ('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
   
})

app.use(express.static(staticFilePath))


app.listen(3000,()=>console.log("server started"));