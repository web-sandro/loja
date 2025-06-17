DROP DATABASE IF EXISTS listadetarefasbd;
CREATE DATABASE IF NOT EXISTS listadetarefasbd;

USE listadetarefasbd;

CREATE TABLE IF NOT EXISTS tarefa (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    feito BOOLEAN NOT NULL DEFAULT FALSE,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME
);

INSERT INTO tarefa (descricao) VALUES
    ('Implementar função de login'),
    ('Corrigir bug na página de perfil'),
    ('Testar integração com API externa'),
    ('Revisar código do projeto'),
    ('Atualizar documentação');

CREATE TABLE usuario (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    	nome VARCHAR(50) NOT NULL,
	data_nascimento DATE,
	apelido VARCHAR(100) NOT NULL UNIQUE,
	senha CHAR(40) NOT NULL,
	email VARCHAR(255) NOT NULL,
	sexo ENUM('masculino', 'feminino', 'outro', 'prefiro não responder'),
	administrador BOOLEAN NOT NULL DEFAULT 0,
	estado ENUM('ativo', 'inativo', 'bloqueado') NOT NULL DEFAULT 'ativo',
	data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    	data_atualizacao DATETIME
);
