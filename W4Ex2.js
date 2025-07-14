// TODO: Create the routes to an express application.
// 1.Make sure to use the following dependencies within your app:
// a. express
// b. nodemon(as a dev dependency, if you know the alternative then you don’t have to
// install it 😉)
// 2. Create GET routes for the employees and the managers.
// 3. Create routes for the POST, PATCH and DELETE methods. Make sure they are clearly
// shown and explained.
// 4. Make sure to use Thunder Client or Postman to test your API.



import express from 'express'
const app = express()

//employees & managers
app.post('/employees',(req,response)=>{
    response.json ({
        message: "this is the Post employees path"
    })
})

app.post('/managers',(req,response)=>{
    response.json ({
        message: "this is the Post managers path"
    })
})

app.patch('/employees',(req,response)=>{
    response.json ({
        message: "this is the Patch employees path"
    })
})

app.patch('/managers',(req,response)=>{
    response.json ({
        message: "this is the Patch managers path"
    })
})

app.delete('/employees',(req,response)=>{
    response.json ({
        message: "this is the Delete employees path"
    })
})

app.delete('/managers',(req,response)=>{
    response.json ({
        message: "this is the Delete managers path"
    })
})

app.listen(5555,()=>{
    console.log('http://localhost:5555');
})

