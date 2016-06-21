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
  var materialsMin8 = _.filter(items, function(item){
    return item.materials.length > 7;
  });

  _.each(materialsMin8, function(item){
    console.log(item.title + ' has ' + item.materials.length + ' materials.');
    _.each(item.materials, function(material){
      console.log(material);
    });
      console.log('\n');
  });


  // QUESTION 6: Return how many items made by their sellers
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log('ANSWER #6');
  var madeBySeller = _.filter(items, function(item){
    return item.who_made === 'i_did';
  });

  console.log(madeBySeller.length + ' were made by their sellers');
})();
