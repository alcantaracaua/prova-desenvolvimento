const Livro = require("../models/Livro");

class LivroController {
  // GET /livros
  listar(req, res) {
    res.json(Livro.todos());
  }

  // POST /livros
  cadastrar(req, res) {
    const { titulo, autor, preco } = req.body || {};

    if (!titulo || !autor || preco === undefined || preco === "" || isNaN(Number(preco))) {
      return res
        .status(400)
        .json({ mensagem: "Informe titulo, autor e preco (numérico)." });
    }

    const livro = Livro.criar({ titulo, autor, preco });
    res.status(201).json({ mensagem: "Livro cadastrado com sucesso!", livro });
  }
}

module.exports = new LivroController();
