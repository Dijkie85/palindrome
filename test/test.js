let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", () => {
  
  describe("#isPalindrome", () => {
    
    it("returns false for non palindrome", () => {
      let nonPalindrome = new Phrase("nosoypalindromo");
      assert(!nonPalindrome.isPalindrome());
    });

    it("returns false for empty string", () => {
      let emptyString = new Phrase(" ");
      assert(!emptyString.isPalindrome());
    });
    
    it("returns true for simple palindrome", () => {
      let palindrome = new Phrase("reconocer");
      assert(palindrome.isPalindrome());
    });
    
    it("returns true for palindrome with mixed case", () => {
      let mixedCasePalindrome = new Phrase("ReConOcER");
      assert(mixedCasePalindrome.isPalindrome());
    });
    
    it("returns true for palindrome with punctuation", () => {
      let punctuatedPalindrome = new Phrase("Ana lleva, al oso, la avellana!")
      assert(punctuatedPalindrome.isPalindrome());
    });
    
    
  });
  
  describe("#letters", () => {
    it("should return only letters", () => {
      let punctuatedPalindrome = new Phrase("Ana.Lleva.Al Oso.");
      assert.strictEqual(punctuatedPalindrome.letters(), "AnaLlevaAlOso");
    });
    
    it("should return blank if there are no letters", () => {
      let noLetters = new Phrase("1234");
      assert.strictEqual(noLetters.letters(), "");
    });
    
  });
  
});