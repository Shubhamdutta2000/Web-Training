var adder = function(a,b){
    return `The sum of the 2number is ${a+b}`;
}

var pi = 3.142;

var sub = function(a,b){
    return `The value is ${a-b}`;
}

module.exports.adder = adder;

module.exports.sub = sub;

module.exports.pi = pi;

/*
module.exports = {
    adder:adder,
    sub:sub,
    pi:pi
}

*/