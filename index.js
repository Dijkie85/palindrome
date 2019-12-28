module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  
  this.content = content;
  
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }
  
  this.letters = function() {
    const regexLetters = /[a-z]/gi
    return (this.content.match(regexLetters) || []).join("");
  };
  
  this.isPalindrome = function() {
    if (this.processedContent()) {
      return (this.processedContent() === this.processedContent().reverse());
    } else {
      return false;
    }
  };
}