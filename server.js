const express = require("express");
const cors = require("cors");
const categoryRoute = require("./routes/Categoryroute");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/ProductRoute");
const ProductListRoute=require("./routes/ProductList");
const productsRouter = require('./routes/ProductRouter');
const Listing=require("./routes/Listing");
const phoneListing=require("./routes/AndroidListings")
const PORT = 5000;


app.use(cors());

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('', categoryRoute);
app.use('', productRoute);
app.use('',ProductListRoute);
app.use('',productsRouter);
app.use('',Listing);
app.use('',phoneListing);

mongoose.connect('mongodb://localhost:27017/category', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.log(err);
        console.log("MongoDB is not connected");
    });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
