const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);
app.use(express.json());
app.use(cookieParser());
const user = require("./routes/userRoutes");
const product = require("./routes/productRoutes");
const community= require('./routes/communityRoutes')
app.use("/api/v1" , product)
app.use("/api/v1" , user)
app.use("/api/v1" , community);

module.exports = app;