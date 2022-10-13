// Config inicial
const express = require("express");
const app = express();

// ler json / middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// rota inicial / endpoint
app.get("/", (req, res) => {
  // mostrar req

  res.json({ message: "oi express!" });
});
// entregar porta pra acesso a API
app.listen(3000, () => {
  console.log("Servidor Rodando");
});
