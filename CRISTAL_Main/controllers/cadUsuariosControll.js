import express from "express";
import Usuarios from "../models/usuarios.js";
import Telefones_Usuarios from "../models/TelefonesUsuarios.js";
import Emails_Usuarios from "../models/EmailsUsuarios.js";

const router = express.Router();

// Rota para exibir o formulário de cadastro e a lista de usuários
router.get("/usuariosCadastro", async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.render("usuariosCadastro", {
      usuariosCadastro: usuarios,
    });
  } catch (err) {
    res.send("Erro ao buscar usuários: " + err.message);
  }
});

// Rota para processar o cadastro do usuário
router.post("/usuariosCadastro/cadastrar", async (req, res) => {
  console.log("Dados recebidos:", req.body); // Depuração

  const {
    Nome_Usuario,
    Idade_Usuario,
    Data_Nascimento_Usuario,
    Perfil_Acesso,
    Senha_Usuario,
    Telefone_Usuario,
    Email_Usuario
  } = req.body;

  try {
    // Verificação simples de e-mail
    if (!Email_Usuario || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email_Usuario)) {
      return res.send("Erro: Email inválido.");
    }

    // Cria o usuário
    const novoUsuario = await Usuarios.create({
      Nome_Usuario,
      Idade_Usuario,
      Data_Nascimento_Usuario,
      Perfil_Acesso,
      Senha_Usuario,
      Ativacao_Usuario: true
    });

    // Insere o telefone relacionado ao usuário
    await Telefones_Usuarios.create({
      ID_Usuario: novoUsuario.ID_Usuario,
      Telefone_Usuario
    });

    // Insere o e-mail relacionado ao usuário
    await Emails_Usuarios.create({
      ID_Usuario: novoUsuario.ID_Usuario,
      Email_Usuario
    });

    res.redirect("/usuariosCadastro");

  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    res.send("Erro ao cadastrar usuário: " + err.message);
  }
});

export default router;




