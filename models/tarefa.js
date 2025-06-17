const pool = require('../config/db');

class Tarefa {
    constructor({
        id = null,
        descricao = null,
        feito = false,
        data_criacao = new Date(),
        data_atualizacao = null
    }) {
        this.id = id;
        this.descricao = descricao;
        this.feito = feito;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
    }

    static async criar(descricao) {
        try {
            const query = 'INSERT INTO tarefa (descricao) VALUES (?)';
            const values = [descricao];
            const [result] = await pool.query(query, values);

            const tarefa = new Tarefa({
                id: result.insertId,
                descricao: descricao,
            });
            return tarefa;
        } catch (error) {
            throw error;
        }
    }

    static async deletar(id) {
        try {
            const query = 'DELETE FROM tarefa WHERE id = ?';
            await pool.query(query, [id]);
            return true;
        } catch (error) {
            throw error;
        }
    }

    static async listarTodos() {
        try {
            const query = 'SELECT * FROM tarefa';
            const [rows] = await pool.query(query);
            const tarefas = rows.map(row => new Tarefa(row));
            return tarefas;
        } catch (error) {
            throw error;
        }
    }

    static async consultarPorId(id) {
        try {
            const query = 'SELECT * FROM tarefa WHERE id = ?';
            const [rows] = await pool.query(query, [id]);
            if (rows.length === 0) {
                return null;
            }
            return new Tarefa(rows[0]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Tarefa;