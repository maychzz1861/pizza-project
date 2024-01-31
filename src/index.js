const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});
