# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thahira_sheerin/lotide`

**Require it:**

`const _ = require('@thahira_sheerin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: To retrieve the first element from the array
* `tail(...)`: To retrieve every element except the head (first element) of the array
* `middle(...)`: To retrieve the middle element of an array
* `without(...)`: Creates an array excluding all given values
* `takeUntil(...)`: Will return slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value.
* `map(...)`: Will return a new array based on the results of the callback function
* `letterPositions(...)`: Will return all the indices (zero-based positions) in the string where each character is found
* `flatten(...)`: Flattens a given Array
* `findKeyByValue(...)`: Takes in an object and a value scans the object and returns the first key which contains the given value
* `findKey(...)`: Takes in an object and a callback and scans the object and returns the first key for which the callback returns a truthy value.
* `eqObjects(...)`: To compare two Objects
* `eqArrays(...)`: To compare two Arrays
* `countOnly(...)`:Takes in a collection of items and return counts for a specific subset of those items
* `countLetters(...)`:Takes in a sentence (as a string) and then returns a count of each of the letters in that sentence
* `assertObjectsEqual(...)`: Asserting that two objects are equal
* `assertEqual(...)`: Asserting two boolean values
* `assertArraysEqual(...)`: Asserting that two arrays are equal