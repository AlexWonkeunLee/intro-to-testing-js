// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('it should be defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('it should return a string', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('it should return Hello, Jane! when given Jane', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('it should return Hello, Alex! when given Alex', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('it should return Hello, Pat! when given Pat', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('it should return Hello, World!', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('it should return Hello, World! when given true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('it should return Hello, World! when given false', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('it should return Hello, Number! when given 2.3', function(){
        expect(sayHello(2.3)).toBe("Hello, Number!");
    });
    it('it should return Hello, Number! when given "5"', function(){
        expect(sayHello("5")).toBe("Hello, Number!");
    });
    it('it should return Hello, Number! when given null', function(){
        expect(sayHello(null)).toBe("Hello, Number!");
    });
});

describe('isFive', function(){
    it('it should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('it should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('it should return true if given 5', function(){
        expect(isFive(5)).toBe(true);
    });
    it('it should return false if given 4', function(){
        expect(isFive(4)).toBe(false);
    });
    it('it should return false if given "abc"', function(){
        expect(isFive("abc")).toBe(false);
    });
    it('it should return true if given "5"', function(){
        expect(isFive("5")).toBe(true);
    });
    it('it should return false if given false', function(){
        expect(isFive(false)).toBe(false);
    });
});

describe('isEven', function(){
    it('it should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('it should return a boolean', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('it should return true when given 2', function(){
        expect(isEven(2)).toBe(true);
    });
    it('it should return true when given -4', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('it should return false when given 3', function(){
        expect(isEven(3)).toBe(false);
    });
    it('it should return false when given "banana"', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('it should return true when given "8"', function(){
        expect(isEven("8")).toBe(true);
    });
    it('it should return false when given Infinity', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('it should return false when given boolean value', function(){
        expect(isEven(true)).toBe(false);
    });
    it('it should return false when given boolean value', function(){
        expect(isEven(false)).toBe(false);
    });
    it('it should return false when given nothing', function(){
        expect(isEven()).toBe(false);
    });
    it('it should return true when given 0', function(){
        expect(isEven(0)).toBe(true);
    });
});

describe('isVowel', function(){
    it('it should be a defined function', function(){
        expect(typeof isVowel).toBe('function');
    });
    it('it should return a boolean', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it('it should return true when given "a"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('it should return true when given "A"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('it should return true when given "e"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('it should return true when given "E"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('it should return true when given "i"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('it should return true when given "I"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('it should return true when given "o"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('it should return true when given "O"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('it should return true when given "u"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('it should return true when given "U"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('it should return false when given "y"', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('it should return false when given 4', function(){
        expect(isVowel(4)).toBe(false);
    });
    it('it should return false when given true', function(){
        expect(isVowel(true)).toBe(false);
    });
    it('it should return false when given false', function(){
        expect(isVowel(false)).toBe(false);
    });
    it('it should return false when given "banana"', function(){
        expect(isVowel("banana")).toBe(false);
    });
    it('it should return false when given nothing', function(){
        expect(isVowel()).toBe(false);
    });
});

describe('add', function(){
    it('it should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('it should return a number value', function(){
        expect(typeof add()).toBe('number');
    });
    it('it should return 5 when given 2 and 3', function(){
        expect(add(2,3)).toBe(5);
    });
    it('it should return -12 when given -3 and -9', function(){
        expect(add(-3, -9)).toBe(-12);
    });
    it('it should return 11 when given "5" and 6', function(){
        expect(add("5", 6)).toBe(11);
    });
    it('it should return 6 when given -4 and "10"', function(){
        expect(add(-4, "10")).toBe(6);
    });
    it('it should return NaN when given "banana" and "split"', function() {
        expect(add("banana", "split")).toBeNaN();
    });
    it('it should return NaN when given 2 and "apples"', function(){
        expect(add(2, "banana")).toBeNaN();
    });
    it('it should return NaN when given nothing', function(){
        expect(add()).toBeNaN();
    });
    it('it should return NaN when given true and true', function(){
        expect(add(true, true)).toBeNaN();
    });
    it('it should return NaN when given true and false', function(){
        expect(add(true, false)).toBeNaN();
    });
    it('it should return NaN when given false and false', function(){
        expect(add(false, false)).toBeNaN();
    });
});