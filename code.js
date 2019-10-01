// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined || name === true || name === false){
        return "Hello, World!";
    }
    else if (!isNaN(name)){
        return "Hello, Number!";
    }
    return "Hello, " + name + "!";
}