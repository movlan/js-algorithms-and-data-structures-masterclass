function charCount(str) {
  // make object to return at the end
  const result = {};
  // loop over string
  for (let ch of str) {
    // make char lowercase
    ch = ch.toLowerCase();
    // if char is a number or letter then
    if (/[a-z0-9]/.test(ch)) {
      result[ch] = ++result[ch] || 1;
    }
    // if cher is something else (space, period, etc.) do not do anything
  }
  // return object
  return result;
}

console.log(charCount('hello'));
console.log(charCount('My phonnnnne number is 555-555-5555'));
