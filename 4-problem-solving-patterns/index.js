function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [1, 4, 8]));

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Frequency = {};
  const str2Frequency = {};

  for (let ch of str1) {
    str1Frequency[ch] = (str1Frequency[ch] || 0) + 1;
  }
  for (let ch of str2) {
    str2Frequency[ch] = (str2Frequency[ch] || 0) + 1;
  }
  for (let key in str1Frequency) {
    if (str1Frequency[key] !== str2Frequency[key]) return false
  }
  return true
}

console.log(anagram('', ''))
console.log(anagram('anagram', 'nagara'))
console.log(anagram('anagram', 'nagaram'))