const express               = require("express");
const app                   = express();
const morgan                = require('morgan');

const mongoose  = require("mongoose");
const dotenv    = require("dotenv")


app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number,
});
const Product = mongoose.model('Product', productSchema );

app.get('/api/v1/products', (req, res) => {
    const product = {
        id:1,
        name:'ahaayyy ',
        image:'url uhuyy'
    }
    res.send(product);
})

app.post('/api/v1/products', (req, res) => {
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
})


const port = 3003;
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Databases Connection is ready')
    app.listen(port, () => console.log(`Connection Success at  http://localhost:${port}`));
    }).catch(err => console.log(err));