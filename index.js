// Config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

// ler json / middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// rotas da api
const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);
// rota inicial / endpoint
app.get("/", (req, res) => {
  // mostrar req

  res.json({ message: "oi express!" });
});

// entregar porta pra acesso a API e conectar com o banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.luqsiw8.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor Rodando");
    });
  })
  .catch((err) => {
    console.log(err);
  });
