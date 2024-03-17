function charCount(str) {
  // make object to return at the end
  const result = {};
  // loop over string
  for (let ch of str) {
    // make char lowercase
    ch = ch.toLowerCase();
    // if char is a number or letter then
    if (ch.match(/[a-z0-9]/i)) {
      if (result[ch]) {
        // if char in object, increment count
        result[ch] += 1;
      } else {
        // if cher is not in the object, add it to the object and set value to 1
        result[ch] = 1;
      }
      // if cher is something else (space, period, etc.) do not do anything
    }
  }
  // return object
  return result;
}

console.log(charCount('hello'));
console.log(charCount('My phone number is 555-555-5555'));
