// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// says Hello 'name'
function sayHello(name) {
    if (name === undefined || name === true || name === false){
        return "Hello, World!";
    }
    else if (!isNaN(name)){
        return "Hello, Number!";
    }
    return "Hello, " + name + "!";
}
// checks if value is five
function isFive(num) {
    if (num == 5){
        return true;
    }
    return false;
}
// checks if value is even
function isEven(num){
    if (typeof(num) == "boolean"){
        return false;
    }
    else return num % 2 === 0;
}
// checks if value is a vowel
function isVowel(letter){
    if(typeof(letter) != "string"){
        return false;
    }
    letter = letter.toLowerCase();
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
        return true;
    }
    else{
        return false
    }
}
// adds the two values together
function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}