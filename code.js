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

function isFive(num) {
    if (num == 5){
        return true;
    }
    return false;
}

function isEven(num){
    if (typeof(num) == "boolean"){
        return false;
    }
    else return num % 2 === 0;
}