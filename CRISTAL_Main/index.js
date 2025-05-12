// Importando dependências
import express from "express";
import cadUsuariosControll from "./controllers/cadUsuariosControll.js";
import usuariosControll from "./controllers/usuariosControll.js";
import connection from "./config/sequelize-config.js";
import evasaoControll from "./controllers/evasaoControll.js"

// Inicializando o app Express
const app = express();

// Conectando ao banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("✅ Conexão com o banco realizada com sucesso!");
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar com o banco:", error);
  });

// (Opcional) Criar banco se não existir — CUIDADO: só funciona em MySQL se você já estiver conectado com permissão para isso.
connection
  .query(`CREATE DATABASE IF NOT EXISTS cristalbd`)
  .then(() => {
    console.log("✅ Banco de dados verificado/criado com sucesso.");
  })
  .catch((error) => {
    console.error("❌ Erro ao criar o banco de dados:", error);
  });

// Configurações do Express
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Para ler formulários
app.use(express.json()); // Para ler JSON
app.use(express.static("public")); // Arquivos estáticos (CSS, JS, imagens)

// 🔁 Redirecionamento de /unidades para /usuariosCadastro
app.get("/unidades", (req, res) => {
  res.redirect("/usuariosCadastro");
});

// Definindo rotas
app.use("/", usuariosControll);
app.use("/", cadUsuariosControll);
app.use("/", evasaoControll);

// Rota inicial
app.get("/", (req, res) => {
  res.render("index");
});

// Iniciando o servidor
const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.error("❌ Erro ao iniciar o servidor:", err);
  } else {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  }
});

