var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
  /*  app.get('/todo', function(req, res){
        res.render('todo')
    });
  */  
   /* For dummy data*/
   app.get('/todo', function(req, res){
        res.render('todo', {todos:data})
   });
   
    app.post('/todo',urlencodedParser, function(req, res){
           data.push(req.body);
           res.json(data)
    });
    
    app.delete('/todo/:item', function(req, res){   
        data = data.filter(function(todo){
                console.log(req.params.item);
                return todo.item.replace(/ /g, "--") !== req.params.item;
            });
            
            res.json(data);
    });
    
}


//For dummy data
var data = [{item: 'eat food'}, {item: 'sleep'}];