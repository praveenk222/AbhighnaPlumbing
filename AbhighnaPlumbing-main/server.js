const express = require("express");
const cors = require("cors");
const memberRoute=require("./app/controllers/members/members.router")
const productRoute=require("./app/controllers/Product/product.route")
const lookupRoute=require("./app/controllers/Lookup/lookup.route")
const orderRoute=require("./app/controllers/Orders/order.route")
const mesurmentLookupRoute=require("./app/controllers/MesurmentLookup/mesurmentLookup.route")
const app = express();
const bodyparser=require('body-parser');
const sql = require('mssql');
const config=require('./app/config/db.config');

var corsOptions = {
  origin: "*"
};
const dbConfig = {
  user: "db_aae43c_abhigna_admin",
  password:"09r11a0222",
  server:"sql5106.site4now.net", 
  database: config.DB,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
      encrypt: true, 
      trustServerCertificate: true, 
  }
};

// Connect to the database
sql.connect(dbConfig).then(pool => {
  if (pool.connected) {
      console.log('Connected to the database');
  }
});
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyparser.json());
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static("frontend"))// to run angular application.

app.use("/api/members", memberRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/lookup", lookupRoute);
app.use("/api/mesurmentlookup", mesurmentLookupRoute);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
