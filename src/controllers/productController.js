

//import db dari models
const  Product = require ('../models/Product');

async function getProducts (req, res, next) {
        const productList = await Product.find();
        if(!productList){
            res.status(500).json({success: false});
        };
        res.send(productList);
    
}

async function postProducts (req, res, next) {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock,
    });

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct);
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        });
    });
}


module.exports = {
    
    getProducts,
    postProducts,
    
}
