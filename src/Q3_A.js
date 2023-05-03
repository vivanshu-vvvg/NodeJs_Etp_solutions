//03_A}Write a JavaScript program using function to find out whether a number is a palindrome or not. The console must display The number is a palindrome if it is a palindrome otherwise it must display 'The number is not a palindrome' 

function isPalindrome(number) {
    const reverseNumber = parseInt(number.toString().split('').reverse().join(''));
    if (number === reverseNumber) {
      return true;
    } else {
      return false;
    }
  }
  
  const number = 1.1; // Example number to check for palindrome
  if (isPalindrome(number)) {
    console.log('The number is a palindrome');
  } else {
    console.log('The number is not a palindrome');
  }
  
  /*
  A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "racecar", "level", and "deified" are all palindromic words.

In the case of numbers, a palindrome number is a number that remains the same when its digits are reversed. For example, 121, 1221, and 12321 are all palindromic numbers.

Palindromes can occur in various contexts, such as words, phrases, sentences, numbers, DNA sequences, and more. They have been studied in mathematics, linguistics, computer science, and other fields.
*/