import express from "express";
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // Fazendo um select na tabela de Clientes
  // fundAll() -> retorna uma promisse
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de cadastro de cliente
router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Enviando dados para o banco
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      console.log(`Realizado cadastro: ${nome} - ${cpf} - ${endereco}`);
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de clientes
router.get("/clientes/delete/:id", (req, res) => {
  // Coletando o parâmetro ID da rota
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id: id
    },
  })
    .then(() => {
      console.log(`Cliente com a ID: ${id} excluido com sucesso`);
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;