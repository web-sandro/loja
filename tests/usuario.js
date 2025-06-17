const Usuario = require('../models/usuario');

(async () => {
    const usuario1 = new Usuario({nome: 'Luiz', apelido: 'lro', senha: '123', email: 'lro@gmail.com'});

    await usuario1.save();

    console.log(usuario1)
})();