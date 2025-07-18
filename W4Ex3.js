import express from 'express' // { response }
import mysql from 'mysql2/promise'

const app = express()

const pool = mysql.createPool({
    database: 'shopleft_database',
    user: 'root',
    password:'Sheisafool1920#',
    host: 'localhost'
})

 
const getUsers = async () => {

    let [info,columns]= await pool.query(`SELECT * FROM users`)
    return info
}
console.log(await getUsers());

 
const getProducts = async () => {

    let [info,columns]= await pool.query(`SELECT * FROM products`)
    return info
}
console.log(await getProducts());

const deleteProduct = async(product_code)=>{
    await pool.query(`DELETE FROM products WHERE product_code = ?;`,[product_code])
}

app.delete('/products/:product_code',async(req,response) => {
    let Products = req.params.product_code
    await deleteProduct(baro1)
    response.json({
        message: "Product deleted successfully."
    })
})

// b. a function that inserts a new product (insert your favourite food item).

const addProducts = async(product_code, product_name, product_price, product_quantity)=> {
    await pool.query (`INSERT INTO products (product_code, product_name, product_price, product_quantity)Values (?, ?, ?, ?);`, ["choc1", "Cadbury Chocolate", 6.99, 10])
}
addProducts("choc1", "Cadbury Chocolate", 6.99, 10);

// c. a function that will update the existing product information.

const patchProducts = async(product_code, product_name,)=> {
    // let {email, phone} = req.body
    await pool.query(`UPDATE products SET product_name = ?   WHERE (product_code = ? );`, [product_name, product_code, ])
}
patchProducts( "Cadbury Top Deck", "choc1"),





































app.listen(8080,()=>{
    console.log('http://localhost:8080'); //serves app with port,'listen'
})



