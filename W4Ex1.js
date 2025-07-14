

//users path

import express from 'express'
const app = express()

app.get('/users',(req,response)=>{
    response.json ({
        message: "this is the GET user path"
    })
})

app.get('/products',(req,response)=>{
    response.json ({
        message: "this is the GET product path"
    })
})

app.post('/users',(req,response)=>{
    response.json ({
        message: "Sign up to our online shopping app"
    })
})

app.post('/products',(req,response)=>{
    response.json ({
        message: "Shop our affordable skincare."
    })
})

app.delete('/users',(req,response)=>{
    response.json ({
        message: "Delete your account at any time."
    })
})

app.delete('/products',(req,response)=>{
    response.json ({
        message: "Remove items from your cart"
    })
})

app.patch('/users',(req,response)=>{
    response.json ({
        message: "Update your info at any time"
    })
})

app.patch('/products',(req,response)=>{
    response.json ({
        message: "Add your promo code before checkout"
    })
})

app.listen(6565,()=>{
    console.log('http://localhost:6565');
})

