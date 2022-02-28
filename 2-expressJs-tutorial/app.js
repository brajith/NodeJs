const express = require('express')
const app = express()
const { products } = require('./Data/data')

//return a JSON object as a response on request to the below endpoint
app.get('/', (req, res) => {
    res.json(products)
})

//returns minimal data regarding products (id, name, image)
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.send(newProducts)
})

//Finds the individual product based on id recieved from request parameter 
app.get('/api/products/:id', (req, res) => {
    
    //req.params object will hold info regarding the requested parameters 
    const { id } = req.params
    const singleProduct = products.find(p => p.id === Number(id))

    //return statement will prohibit control to move to next instruction 
    if(!singleProduct) {
        return res.status(404).send('product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter(p => p.name.startsWith(search))
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1)
        return res.status(200).send('products not available')

    res.status(200).json(sortedProducts)

})

app.listen(5000, () => {
    console.log("Server is listining at port 5000...");
})