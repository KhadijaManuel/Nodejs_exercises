import express, { response } from 'express'//if greyed out, the file is not being used currently.
//this init app:
const app = express() 

//create GET path.this takes 2 arguments: path and function; this is the routes
app.get('/getInfo',(req, response)=>{ //getInfo takes two arguments
    response.json({
        message: "Hi, you saw the api!"
    })
})

//create rout
app.get('/name',(req,response)=>{
    response.json ({
        message: "Gutentacht, mein namen is Khadija!"
    })
})

app.post('/add',(req,response)=>{ //use postman or thunder client for post(add info)
    response.json({
        message:'This post route runs perfectly.'})
})
//thunder client simulate the browser output

app.delete('/delete',(req,response)=>{
    response.json ({
        message: "Estu nada, no nombre!"
    })
})

app.patch('/world',(req,response)=>{
    response.json ({
        message: "Fix the world!"
    })
})

//let app be accessed from link//localhost.
app.listen(8080,()=>{
    console.log('http://localhost:8080');
})

//node does not track updates.
//to cancel project from runnin cntr+C

