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
    it('it should return Hello, World! when given null', function(){
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