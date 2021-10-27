const express               = require("express");
const app                   = express();
const morgan                = require('morgan');

const mongoose  = require("mongoose");
const dotenv    = require("dotenv")
const cors      = require("cors");

app.use(cors());
app.options("*", cors());


dotenv.config();
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));


//* Call Routes
const categoriesRoutes  = require('./src/routes/categories');
const productsRoutes    = require('./src/routes/product');
const usersRoutes       = require('./src/routes/users');
const ordersRoutes      = require('./src/routes/orders');

//End Point Router
const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


const port = 3003;
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Databases Connection is ready')
    app.listen(port, () => console.log(`Connection Success at  http://localhost:${port}`));
    }).catch(err => console.log(err));