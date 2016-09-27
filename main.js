/* globals _, items */

(function() {
  'use strict';

  // QUESTION ONE: Return the average price of all items
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var priceOfAllItems = _.chain(items)
    .map(function(item) {
      return item.price;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0)
    .value();
  var averagePrice = priceOfAllItems / items.length;

  console.log('ANSWER #1');
  // console.log('The average price is $' + averagePrice.toFixed(2)); // rounds the answer
  console.log('The average price is $' + Math.floor(averagePrice * 100) / 100); // does not round the answer; matches the answer key
  console.log('\n');

  // QUESTION TWO: Return a list of all items that cost between $14.00 and $18.00 USD
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var answerArray = [];
  var priceRangeItems = _.chain(items)
    .filter(function(item) {
      return item.currency_code === 'USD' && item.price > 14 && item.price < 18
    })
    .map(function(item) {
      return item.title
    })
    .value();
  _.each(priceRangeItems, function(item) {
    var object = {
      title: item
    };
    answerArray.push(object);
  });

  console.log('ANSWER #2');
  console.log('Items that cost between $14.00 USD and $18.00 USD:');
  for (var i = 0; i < priceRangeItems.length; i++) {
    console.log(answerArray[i].title + '\n');
  }
  console.log('\n');

  // QUESTION THREE: Return the item with a 'GBP' currency code and print its name and price
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var currencyGBP = _.filter(items, function(item) {
    return item.currency_code === 'GBP';
  });

  console.log('ANSWER #3');
  _.each(currencyGBP, function(item) {
    console.log(item.title + ' costs £' + item.price + '\n');
  });
  console.log('\n');

  // QUESTION FOUR: Return items that contain wood
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log('ANSWER #4');
  items.forEach(function(item) {
    if (item.materials.indexOf('wood') !== -1) {
      console.log(item.title + ' is made of wood');
    }
  });
  console.log('\n');

  // QUESTION FIVE: Return items made of eight or more materials
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log('ANSWER #5');
  var materialsMin8 = _.filter(items, function(item) {
    return item.materials.length > 7;
  });

  _.each(materialsMin8, function(item) {
    console.log(item.title + ' has ' + item.materials.length + ' materials.');
    _.each(item.materials, function(material) {
      console.log(material);
    });
    console.log('\n');
  });


  // QUESTION 6: Return how many items made by their sellers
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log('ANSWER #6');
  var madeBySeller = _.filter(items, function(item) {
    return item.who_made === 'i_did';
  });

  console.log(madeBySeller.length + ' were made by their sellers');
  console.log('\n');

  console.log('LEVEL UP and POWER LEVEL 9000 solutions are stored in main.js.');

  // LEVEL UP
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  max(2, 3); // returns 3

  // 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

  function maxOfThree(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > c) {
      {
        return b;
      }
    } else {
      return c;
    }
  }

  maxOfThree(1, 2, 3); // returns 3
  maxOfThree(2, 3, 1); // returns 3
  maxOfThree(3, 2, 1); // returns 3

  // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

  function isVowel(character) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.indexOf(character.toLowerCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  isVowel('a'); // returns true
  isVowel('b'); // returns false

  // 4. Write a function translate() that will translate a text into 'rövarspråket'. That is, double every consonant and place an occurrence of 'o' in between. For example, translate('this is fun') should return the string 'tothohisos isos fofunon'.
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  function translate(string) {
    var character, newString = '';
    string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
      character = string[i];
      if (consonants.indexOf(character) !== -1) {
        newString = newString + character + 'o' + character;
      } else {
        newString = newString + character;
      }
    }
    return newString;
  }

  translate('this is fun'); // returns 'tothohisos isos fofunon'

  // 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

  var array = [1, 2, 3, 4];

  function sum(array) {
    return array.reduce(function(a, b) {
      return a + b;
    });
  }

  function multiply(array) {
    return array.reduce(function(a, b) {
      return a * b;
    });
  }

  sum(array); // returns 10
  multiply(array); // returns 24

  // 6. Define a function reverse() that computes the reversal of a string. For example, reverse('jag testar') should return the string 'ratset gaj'.

  function reverse(string) {
    return string.split('').reverse().join('');
  }

  reverse('jag testar'); // returns 'ratset gaj'

  // 7. Represent a small bilingual lexicon as a Javascript object in the following fashion {'merry':'god', 'christmas':'jul', 'and':'och', 'happy':gott', 'new':'nytt', 'year':'år'} and use it to translate your Christmas cards from English into Swedish.

  var greeting = 'Merry Christmas And Happy New Year';

  var swedishText = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  };

  function translator(string) {
    string = string.toLowerCase();
    var array = string.split(' ');
    for (var i = 0; i < array.length; i++) {
      array[i] = swedishText[array[i]];
    }
    string = array.join(' ');
    return string;
  }

  translator(greeting); // returns 'god jul och gott nytt år'

  // 8. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

  var words = ['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'];

  function findLongestWord(array) {
    var length = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > length) {
        length = array[i].length;
      }
    }
    return length;
  }

  findLongestWord(words); // returns 6
  //
  // 9. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

  function filterLongWords(array, i) {
    return array.filter(function(item) {
      return item.length > i;
    });
  }

  filterLongWords(words, 4); // uses var words defined in #8; returns ["hello", "world", "anyone", "really"]

  // 10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq('abbabcbdbabdbdbabababcbcbab').

  function charFreq(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
      var char = string.charAt(i);
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
    return freq;
  }

  charFreq('abbabcbdbabdbdbabababcbcbab'); // returns {a: 7, b: 14, c: 3, d: 3}

  // POWER LEVEL 9000
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:
  //     ```js
  //     function forEach(list, callback) { /* Do stuff */ }
  //     ```

  function forEach(list, callback) { // takes in an array (list) as the first argument and function as the second argument
    for (var i = 0; i < list.length; i++) { // iterate over the list
      callback(list[i], i); // invokes the callback function that you passed in; passes in the item and the position
    }
  }

  // 2. Write your own map, reduce, and filter that use your custom forEach to do their work.

  function map(list, callback) {
    var result = []; // result will return a new array
    for (var i = 0; i < list.length; i++){
      result.push(callback(list[i], i));
    }
    return result;
  }

  function reduce(list, callback) {
    var result = []; // result will return a new array
    for (var i = 0; i < list.length; i++) { // iterate over the list
      result.push(callback(list[i], i)); // push return value of callback; callback invoked with the item and the position
    }
    return result;
  }

  function filter(list, callback) {
    var results = []; // results array will contain items that pass the truth test
    for (var i = 0; i < list.length; i++) { // iterate over the list
      if (callback(list[i], i)) { // invokes the callback function that you passed in; passes in the item and the position
        results.push(list[i]);
      }
    }
    return results;
  }

  // 3. Write a function called pluck that extracts a list of property names:
  //     ```js
  //     function pluck(list, propertyName) { /* Do stuff*/ }
  //
  //     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  //     pluck(stooges, 'name');
  //     // => ['moe', 'larry', 'curly']
  //     ```

  function pluck(list, propertyName){
    var result = [];
    for(var i = 0; i <list.length; i++) {
      result.push(list[i][propertyName]);
    }
    return result;
  }

  // 4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
  //     ```js
  //     function reject(list, predicate) { /* Do stuff */ }
  //
  //     var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  //     //=> [1, 3, 5]
  //     ```

  function reject(list, callback){
    var result = [];
    for(var i = 0; i < list.length; i++){
      if(!callback(list[i], i)){
        result.push(list[i]);
      }
    }
    return result;
  }

  /// TEST TO RETURN odds

  var numbers =  [1, 2, 3, 4, 5, 6];
  
  function evenNumbers(num){
    return num % 2 === 0;
  }

  reject(numbers, evenNumbers); // => [1, 3, 5]


  // 5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
  //     ```js
  //     function find(list, predicate) { /* Do stuff */ }
  //
  //     var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  //     //=> 2
  //     ```
  //
  // 6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
  //     ```js
  //     function where(list, properties) { /* Do stuff */ }
  //
  //     where(listOfPlays, {author: 'Shakespeare', year: 1611});
  //     // => [{title: 'Cymbeline', author: 'Shakespeare', year: 1611},
  //     //     {title: 'The Tempest', author: 'Shakespeare', year: 1611}]
  //     ```

})();
