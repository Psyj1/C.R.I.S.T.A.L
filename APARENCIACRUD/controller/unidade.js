import express from "express";
const router = express.Router();

// Importando o Model de Cliente
import Unidade from "../models/unidade";

// ROTA CLIENTES
router.get("/unidade", function (req, res) {
  
  // Fazendo um select na tabela de Clientes
  // fundAll() -> retorna uma promisse
  Unidade.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  }).catch((error) => {
    console.log(error);
  });
});
export default router;
