const db = require('../config/db');

class Usuario {
    constructor({
        id = null,
        nome = null,
        data_nascimento = null,
        apelido = null,
        senha = null,
        email = null,
        sexo = null,
        administrador = false,
        estado = null,
        data_criacao = new Date(),
        data_atualizacao = null
    }) {
        this.id = id;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.apelido = apelido;
        this.senha = senha;
        this.email = email;
        this.sexo = sexo;
        this.administrador = administrador;
        this.estado = estado;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
    }

    async save() {
        const query = `INSERT INTO usuario (nome, data_nascimento, apelido, senha, email, sexo, administrador, data_criacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [this.nome, this.data_nascimento, this.apelido, this.senha, this.email, this.sexo, this.administrador, this.data_criacao];
        const result = await db.query(query, values);
        this.id = result.insertId;
    }
}

module.exports = Usuario;