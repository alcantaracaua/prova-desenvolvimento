// Model: armazenamento temporário em array (sem banco de dados)
const livros = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R Tolkien", preco: 45.9 },
  { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", preco: 29.9 },
  { id: 3, titulo: "1984", autor: "George Orwell", preco: 39.9 },
];

let proximoId = livros.length + 1;

module.exports = {
  todos() {
    return livros;
  },
  criar({ titulo, autor, preco }) {
    const livro = { id: proximoId++, titulo, autor, preco: Number(preco) };
    livros.push(livro);
    return livro;
  },
};
