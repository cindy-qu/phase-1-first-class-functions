// take a CB function as an argument, call the CB function, doesn't matter what this function returns, as long as it calls CB function
function receivesAFunction(callback) {
   callback();
}

// take no arguments, return a named function
function returnsANamedFunction() {
    return function namedFn (){
    console.log('hello');
    }
}

// take no arguments, return an anonymous function

function returnsAnAnonymousFunction() {
    return function (){ 
    console.log('hello');
    }
}