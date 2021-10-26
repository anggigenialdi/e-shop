const express               = require("express");
const app                   = express();
const morgan                = require('morgan');

const mongoose  = require("mongoose");
const dotenv    = require("dotenv")

//* Call Routes
const productRoutes = require('./src/routes/product');

dotenv.config();
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));



//End Point Router
const api = process.env.API_URL;
app.use(`${api}`, productRoutes);



const port = 3003;
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Databases Connection is ready')
    app.listen(port, () => console.log(`Connection Success at  http://localhost:${port}`));
    }).catch(err => console.log(err));