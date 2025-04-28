import express from "express";
const router = express.Router();

import AlunosController from "../models/Students.js";

router.get("/alunos", function (req, res) {
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

router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
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

router.get("/clientes/delete/:id", (req, res) => {
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