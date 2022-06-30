require("dotenv").config();

const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, ()=> {
    console.log(`aplicacion corriendo en el puerto ${process.env.PORT}`);
});
