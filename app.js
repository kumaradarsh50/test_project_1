// Write a JS program that finds the longest common substring between two strings.

const stringArray = ['hello', 'hello'];

const longestCommanSubstring = (stringArr) => {
  const arr = stringArr.concat().sort();
  const arrInitialLength = arr[0];

  const arrLength = arr[arr.length - 1];
  console.log(arrInitialLength);
  const firstArray = arrInitialLength.length;

  let i = 0;

  while (i < firstArray && arrInitialLength.charAt(i) === arrLength.charAt(i)) {
    i++;
    return arrInitialLength.substring(0, i).length;
  }
};

console.log(longestCommanSubstring(['hello', 'helworld']));
