import express from "express";
import Usuarios from "../models/usuarios.js";
import Telefones_Usuarios from "../models/TelefonesUsuarios.js";
import Emails_Usuarios from "../models/EmailsUsuarios.js";

const router = express.Router();

// ROTA: LISTA SOMENTE USUÁRIOS ATIVOS
router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll({
      where: { Ativacao_Usuario: true },
      include: [Emails_Usuarios], // Inclui e-mail do usuário
    });

    res.render("usuarios", { usuarios });
  } catch (err) {
    res.send("Erro ao buscar usuários: " + err.message);
  }
});

// ROTA: "DELETA" UM USUÁRIO (INATIVA)
router.get("/usuarios/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Usuarios.update(
      { Ativacao_Usuario: false },
      { where: { ID_Usuario: id } }
    );

    res.redirect("/usuarios");
  } catch (err) {
    console.error("Erro ao inativar usuário:", err);
    res.status(500).send("Erro ao tentar inativar o usuário.");
  }
});

// ROTA: FORMULÁRIO DE EDIÇÃO
router.get("/usuarios/edit/:id", (req, res) => {
  const id = req.params.id;

  Usuarios.findByPk(id, {
    include: [Telefones_Usuarios, Emails_Usuarios],
  })
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).send("Usuário não encontrado.");
      }

      res.render("editarUsuario", {
        usuario,
        telefone: usuario.Telefones_Usuarios?.[0]?.Telefone_Usuario || "",
        email: usuario.Emails_Usuarios?.[0]?.Email_Usuario || "",
      });
    })
    .catch((err) => {
      console.error("Erro ao buscar usuário:", err);
      res.status(500).send("Erro ao buscar dados do usuário.");
    });
});


// ROTA: SALVAR ALTERAÇÕES
router.post("/usuarios/edit/:id", (req, res) => {
  const id = req.params.id;
  const {
    Nome_Usuario,
    Data_Nascimento_Usuario,
    Perfil_Acesso,
    Senha_Usuario,
    Email_Usuario,
    Telefone_Usuario,
  } = req.body;

  // Atualiza os dados principais do usuário
  Usuarios.update(
    {
      Nome_Usuario,
      Data_Nascimento_Usuario,
      Perfil_Acesso,
      Senha_Usuario,
    },
    { where: { ID_Usuario: id } }
  )
    .then(() => {
      // Verifica se o e-mail já existe
      Emails_Usuarios.findOne({ where: { ID_Usuario: id } })
        .then((emailExistente) => {
          if (emailExistente) {
            return Emails_Usuarios.update(
              { Email_Usuario },
              { where: { ID_Usuario: id } }
            );
          } else {
            return Emails_Usuarios.create({ ID_Usuario: id, Email_Usuario });
          }
        })
        .then(() => {
          // Verifica se o telefone já existe
          return Telefones_Usuarios.findOne({ where: { ID_Usuario: id } });
        })
        .then((telefoneExistente) => {
          if (telefoneExistente) {
            return Telefones_Usuarios.update(
              { Telefone_Usuario },
              { where: { ID_Usuario: id } }
            );
          } else {
            return Telefones_Usuarios.create({ ID_Usuario: id, Telefone_Usuario });
          }
        })
        .then(() => {
          res.redirect("/usuarios");
        })
        .catch((err) => {
          console.error("Erro ao atualizar e-mail ou telefone:", err);
          res.status(500).send("Erro ao tentar atualizar o e-mail ou telefone.");
        });
    })
    .catch((err) => {
      console.error("Erro ao atualizar usuário:", err);
      res.status(500).send("Erro ao tentar atualizar o usuário.");
    });
});


export default router;


