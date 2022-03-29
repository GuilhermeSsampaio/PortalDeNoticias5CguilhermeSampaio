module.exports=function(app){
    //rota para a página de notícia
    app.get('/noticias',function(req,res){
        const dbConnection=require('../../config/dbConnection');//importando o banco de dados
        const connection = dbConnection();//executando  a conexão com o banco de dados
         //conexão com o banco de dados portal_noticias:
        connection.query('select * from noticias',function(error,result){
            if(error){
                console.log(error);// mostrar o erro no terminal
            }
            res.render('noticias/noticias.ejs', {noticias: result});//renderização da tela noticia.ejs juntamente com o envio da variavel result
        });
        	
    });
}
