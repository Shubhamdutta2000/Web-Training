//Normal function statement
function sayHello(){
    console.log('Hello');
}
sayHello();

//Functionl expression
var sayBye = function(){
    console.log("Byee");
}
sayBye();


function callFunction(fun){
    fun();
}

callFunction(sayBye);