const mysql=require('mysql');//importação do módulo mysql;

module.exports=function(){
    return mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'root',
        database:'portal_noticias'
    });//cria conexão com o banco de dados portal_noticias
}