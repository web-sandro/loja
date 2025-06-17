const Tarefa = require('../models/tarefa');

(async function () {
    try {
        // Criar uma nova tarefa
        // const novaTarefa = await Tarefa.criar('Nova tarefa');
        // console.log('Nova tarefa criada:', novaTarefa);

        // Listar todas as tarefas
        // const tarefas = await Tarefa.listarTodos();
        // console.log('Todas as tarefas:', tarefas);

        // // Consultar uma tarefa por ID
        // const tarefaPorId = await Tarefa.consultarPorId(1);
        // console.log('Tarefa por ID:', tarefaPorId);

        // // Deletar uma tarefa
        // const deletado = await Tarefa.deletar(6);
        // console.log('Tarefa deletada:', deletado);        
    } catch (error) {
        console.error('Erro:', error);
    }
})();