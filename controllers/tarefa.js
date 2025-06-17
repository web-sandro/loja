const Tarefa = require('../models/tarefa');

class TarefaController {
    static async listarTarefas(req, res) {
        try {
            const tarefas = await Tarefa.listarTodos();
            res.render('tarefa/listar', { tarefas });
        } catch (error) {
            res.status(500).render('error', { message: 'Erro no servidor', error });
        }
    }

    static async exibirFormularioCadastro(req, res) {
        res.render('tarefa/cadastrar');
    }

    static async cadastrarTarefa(req, res) {
        try {
            const { descricao } = req.body;
            await Tarefa.criar(descricao);
            res.redirect('/tarefas');
        } catch (error) {
            res.status(500).render('error', { message: 'Erro no servidor', error });
        }
    }

    static async exibirDetalhesTarefa(req, res) {
        try {
            const { id } = req.params;
            const tarefa = await Tarefa.consultarPorId(id);
            if (!tarefa) {
                res.status(404).render('404');
                return;
            }
            res.render('tarefa/exibir', { tarefa });
        } catch (error) {
            res.status(500).render('error', { message: 'Erro no servidor', error });
        }
    }

    static async exibirFormularioDelecao(req, res) {
        try {
            const { id } = req.params;
            const tarefa = await Tarefa.consultarPorId(id);
            if (!tarefa) {
                res.status(404).render('404');
                return;
            }
            res.render('tarefa/deletar', { tarefa });
        } catch (error) {
            res.status(500).render('error', { message: 'Erro no servidor', error });
        }
    }

    static async deletarTarefa(req, res) {
        try {
            const { id } = req.params;
            await Tarefa.deletar(id);
            res.redirect('/tarefas');
        } catch (error) {
            res.status(500).render('error', { message: 'Erro no servidor', error });
        }
    }
}

module.exports = TarefaController;
