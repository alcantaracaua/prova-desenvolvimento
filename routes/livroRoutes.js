const express = require("express");
const LivroController = require("../controllers/LivroController");

const router = express.Router();

router.get("/livros", (req, res) => LivroController.listar(req, res));
router.post("/livros", (req, res) => LivroController.cadastrar(req, res));

module.exports = router;
