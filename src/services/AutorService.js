const pool = require('../config/database');

async function listarAutores() {
  const [autores] = await pool.query('SELECT * FROM Autores');
  return autores;
}

async function adicionarAutor(Autor) {
  const { nome, biografia, dataNascimento } = Autor;
  // Você vai criar o INSERT INTO abaixo.
  const [results] = await pool.query('', [nome, biografia, dataNascimento]);
  return results.insertId;
}

async function atualizarAutor(id, Autor) {
  const { nome, biografia, dataNascimento } = Autor;
  // Você vai criar o UPDATE abaixo.
  await pool.query('', [nome, biografia, dataNascimento, id]);
}

async function deletarAutor(id) {
  // Você vai criar o DELETE abaixo.
  await pool.query('', [id]);
}

module.exports = {
  listarAutores,
  adicionarAutor,
  atualizarAutor,
  deletarAutor
};