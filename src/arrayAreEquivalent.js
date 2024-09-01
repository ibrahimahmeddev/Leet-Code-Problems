let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
let arrayStringsAreEqual = function (word1, word2) {
  let arr1 = word1.join("").split(" ");
  let arr2 = word2.join("").split(" ");
  let res = arr1[0] === arr2[0] ? true : false;

  return res;
};

console.log(arrayStringsAreEqual(word1, word2));
