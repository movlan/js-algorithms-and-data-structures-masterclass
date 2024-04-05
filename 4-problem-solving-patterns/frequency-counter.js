const sameFrequency = (num1, num2) => {
  const str1 = String(num1)  
  const str2 = String(num2)  

  if (str1.length !== str2.length) return false;
  const freq1 = {};
  const freq2 = {};

  

  for (let ch of str1) {
    freq1[ch] = (freq1[ch] || 0) + 1;
  }
  for (let ch of str2) {
    freq2[ch] = (freq2[ch] || 0) + 1;
  }
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false;
  }

  return true;
};

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(18, 21));

function areThereDuplicates(...args) {
  const seen = {}
  for (let item of args) {
    if (seen[item]) {
      return true
    }
    seen[item] = true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 