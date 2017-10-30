module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/articles/new')
	.get(articles.new);
	
	app.route('/articles/all')
	.get(articles.all);
	
	app.route('/articles/:articleId')
	.get(articles.view);

	app.route('/articles/:articleId')
	.get(articles.edit);
	

	
 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


app.param('articleId', articles.articleByID);


}