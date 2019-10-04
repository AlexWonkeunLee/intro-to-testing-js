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

function isVowel(letter){
    if(typeof(letter) != "string"){
        return false;
    }
    letter = letter.toLowerCase();
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        return true;
    }
    else{
        return false
    }
}