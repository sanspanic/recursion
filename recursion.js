console.log("connected");

const doubler = (arr) => {
  for (let n of arr) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
};

let patience = 10;
console.log("I love recursion and I love ");

const beAnnoying = (phrase) => {
  if (!patience) return;
  console.log(phrase);
  patience--;
  beAnnoying("that I love");
};

beAnnoying("that I love ");
console.log("recursion.");

//Write a function that finds the product of an array of numbers:
const product = (arr, idx = 0) => {
  if (idx === arr.length) return 1;
  return arr[idx] * product(arr, idx + 1);
};

console.log(product([2, 3, 4])); // 24

//Given a list of words, return the length of the longest:
const longest = (words, idx = 0, longestSoFar = 0) => {
  if (idx === words.length) return longestSoFar;
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  return longest(words, idx + 1, longestSoFar);
};

console.log(longest(["hello", "hi", "hola"])); // 5

//Write a function that returns a string of every other character:

const everyOther = (str, idx = 0, newStr = "") => {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
};

console.log(everyOther("hello")); // "hlo"

//Write a function that returns true/false depending on whether passed-in string is a palindrome:
const isPalindrome = (str, idx = 0) => {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
};

console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("tacodog")); // false

//return the index of val in arr (or -1 if val is not present).

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

// return a copy of a string, but in reverse.

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

// gatherStrings: given an object, return an array of all of the string values.

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

// binarySearch: given a sorted array of numbers, and a value, return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
