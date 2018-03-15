const express = require('express');
const logger = require("./logger");
const morgan = require('morgan');

const router = require("./routers/genres")

const app = express();

app.use(express.json());
app.use(logger);
app.use(morgan("tiny"))

app.use("/api/genres", router);

let port = 4000;
app.listen(port,()=>{
    console.log(`Genre server started and listening on port: ${port}`);
})
