module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/articles/new')
	.get(articles.create);
//	.post(users.requiresLogin, articles.create);

  app.route('/articles/all')
	.get(articles.all);
 // .delete(users.requiresLogin, articles.delete);

	app.route('/articles/:edit')
	.get(articles.edit);
	
		app.route('/articles/:view')
	.get(articles.view);
//	.put(users.requiresLogin, articles.update);

app.route('/api/articles/')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);
	

app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.delete);
	
app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


app.param('articleId', articles.articleByID);


}
