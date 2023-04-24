const db = require('./db')

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
});

module.exports = Post;


/*Post.sync({ force: true }) - só executar na hora que 
criar o module, se não o que já foi criado será apagado 
e susbstituido por informações novas e vazias*/

