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
      return item.title;
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

  var freq = charFreq('abbabcbdbabdbdbabababcbcbab');

  console.assert(freq.a === 7);

  // for (key in freq) {
  //   console.assert(frq[key] == correct[key]);
  // }

  // POWER LEVEL 9000
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:
  //     ```js
  //     function forEach(list, callback) { /* Do stuff */ }
  //     ```

  function forEach(array, callback) { // takes in an array as the first argument and function as the second argument
    for (var i = 0; i < array.length; i++) { // iterate over the array
      callback(array[i]);
    }
  }

  // 2. Write your own map, reduce, and filter that use your custom forEach to do their work.

  // create a anonymous function to use as your callback

  // function map(array, callback) {
  //   var result = []; // result will return a new array
  //   for (var i = 0; i < array.length; i++) {
  //     result.push(callback(array[i]));
  //   }
  //   return result;
  // }

  var numbers = [2, 4, 7];

  function map(array) {
    var result = [];
    forEach(array, function(item) {
      result.push(item + 2);
    });
    return result;
  }

  map(numbers) // => [4,6,9]

  // function reduce(array, callback, start) {
  //   var result = start;
  //   for (var i = 0; i < array.length; i++) { // iterate over the array
  //     result = callback(result, array[i]);
  //   }
  //   return result;
  // }

  function reduce(array, start) {
    var result = start;
    forEach(array, function(item) {
      result += item;
    });
    return result;
  }

  reduce(numbers, 0); // => 13
  reduce(numbers, 10); // => 23

  // function filter(array, callback) {
  //   var result = []; // result array will contain items that pass the truth test
  //   for (var i = 0; i < array.length; i++) { // iterate over the array
  //     if (callback(array[i])) { // invokes the callback function with array item
  //       result.push(array[i]); // adds item to result if callback returns true
  //     }
  //   }
  //   return result;
  // }

  function filter(array) {
    var result = [];
    forEach(array, function(item) {
      if (item % 2 === 0) {
        result.push(item);
      }
    });
    return result;
  }

  filter(numbers); // => [2, 4]

  // 3. Write a function called pluck that extracts a list of property names:

  function pluck(list, propertyName) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      result.push(list[i][propertyName]);
    }
    return result;
  }

  /// TEST TO RETURN THE THREE STOOGES NAMES

  var stooges = [{
    name: 'moe',
    age: 40
  }, {
    name: 'larry',
    age: 50
  }, {
    name: 'curly',
    age: 60
  }];
  pluck(stooges, 'name'); // => ['moe', 'larry', 'curly']


  // 4. Write a function called reject that returns the values in a list without the elements that the truth test (predicate) passes. The opposite of filter.

  function reject(list, predicate) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      if (!predicate(list[i])) {
        result.push(list[i]);
      }
    }
    return result;
  }

  /// TEST TO RETURN ODD NUMBERS

  var numbers = [1, 2, 3, 4, 5, 6];

  function evenNumbers(num) {
    return num % 2 === 0;
  }

  reject(numbers, evenNumbers); // => [1, 3, 5]


  // 5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

  function find(list, predicate) {
    var result;
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i])) {
        result = list[i];
        return result;
      }
    }
    return result;
  }

  /// TEST THAT THE FIRST EVEN NUMBER IS RETURNED

  find(numbers, evenNumbers); // => 2


  // 6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.

  // function whereFilter(list, properties) {
  //   list = list.filter(function(item) {
  //     for (var prop in properties) {
  //       if (item[prop] === undefined || item[prop] !== properties[prop]) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  //   return list;
  // }

  function where(list, properties) {
    var results = [];
    var isFound = true;
    for (var i = 0; i < list.length; i++) {
      for (var prop in properties) {
        if (list[i][prop] === undefined || list[i][prop] !== properties[prop]) {
          isFound = false;
        }
      }
      if (isFound === true) {
        results.push(list[i]);
      }
    }
    return results; // returns all list items that do not match filter properties
  }

  /// THIS DOES THE OPPOSITE

  // function notWhere(list, properties) {
  //   var results = [];
  //   for (var prop in properties) {
  //     for (var i = 0; i < list.length; i++) {
  //       if (list[i][prop] === undefined || list[i][prop] !== properties[prop]) {
  //         results.push(list[i]);
  //       }
  //     }
  //   }
  //   return results; // returns all list items that do not match filter properties
  // }

  /// TEST THAT THE CORRECT LIST OF PLAYS IS RETURNED

  var plays = [{
    title: 'Cymbeline',
    author: 'Shakespeare',
    year: 1611
  }, {
    title: 'The Tempest',
    author: 'Shakespeare',
    year: 1611
  }, {
    title: 'All\'s Well That Ends Well',
    author: 'Shakespeare',
    year: 1602
  }, {
    title: 'Much Ado about Nothing',
    author: 'Shakespeare',
    year: 1598
  }, {
    title: 'The Tragedy of Macbeth',
    author: 'Shakespeare',
    year: 1605
  }];

  var properties = {
    author: 'Shakespeare',
    year: 1611
  };

  where(plays, properties); // => [{title: 'Cymbeline', author: 'Shakespeare', year: 1611}, {title: 'The Tempest', author: 'Shakespeare', year: 1611}]

})();
