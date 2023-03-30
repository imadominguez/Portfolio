const express = require("express");
// const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de archivos PDF!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
