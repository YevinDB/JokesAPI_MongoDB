const express = require("express")
const bodyParser = require("body-parser")
const jokes = require("./routes/routes_jokes")

require("dotenv/config")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

//middlewares

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use("/jokes", jokes)

//mongoose db connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connection to DB established")
})

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CRUD API with MongoDB",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and NodeJS, and documented with Swagger",
            contact: {
                name: "Yevin Bogahawatte",
                email: "ybogahawatte2003@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3002",
                url: "http://20.196.207.197:3002"
            },
        ],
    },
    apis: ["./routes/routes_jokes.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

app.listen(3002, () => {
    console.log("Server running on Port 3002...")

})