const news=require('./news');

function route(app){
    app.use('/',news);
}

module.exports=route;