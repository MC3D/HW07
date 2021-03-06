# 9/4/14
Using the gist below, use the array of objects defined at the bottom of the script to answer the questions at the top of the script.

https://gist.github.com/masondesu/1eafc9e7dff1ca7666ba

# Level Up
If you complete the above assignment, complete the 10 exercises here:

http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html

# Power Level 9000

One of the most useful exercises I've ever done as a programmer is the following:

1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:
    ```js
    function forEach(list, callback) { /* Do stuff */ }
    ```

2. Write your own map, reduce, and filter that use your custom forEach to do their work.

3. Write a function called pluck that extracts a list of property names:
    ```js
    function pluck(list, propertyName) { /* Do stuff*/ }

    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    pluck(stooges, 'name');
    // => ["moe", "larry", "curly"]
    ```

4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
    ```js
    function reject(list, predicate) { /* Do stuff */ }

    var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    //=> [1, 3, 5]
    ```

5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
    ```js
    function find(list, predicate) { /* Do stuff */ }

    var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    //=> 2
    ```

6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
    ```js
    function where(list, properties) { /* Do stuff */ }

    where(listOfPlays, {author: "Shakespeare", year: 1611});
    // => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    //     {title: "The Tempest", author: "Shakespeare", year: 1611}]
    ```
