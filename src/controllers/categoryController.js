

//import db dari models
const  Category = require ('../models/Category');

async function getCategory (req, res, next) {
    const categoryList = await Category.find();

    if(!categoryList) {
        res.status(500).json({success: false})
    } 
    res.send(categoryList);
    
}

async function postCategory (req, res, next) {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    });

    category = await category.save();
    
    if(!category)
    return res.status(404).send('the category cannot be created!');

    res.send(category);
}


module.exports = {
    
    getCategory,
    postCategory,
    
}
