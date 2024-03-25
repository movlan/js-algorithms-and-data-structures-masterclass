# Problem Solving Patterns

## Frequency counters

this patterns uses objects or sets to collect values/frequencies of values

### Example

Write a function called same, which accespts two arrays. The function should return true if every velue in the array has it's corresponding value squeared in the second array. The frequency of values must be same.

1. Naive solution

   ```js
   function same(arr1, arr2) {
     if (arr1.length!== arr2.length) {
       return false;
     }
     for (let i = 0; i < arr1.length; i++) {
       let correctIndex = arr2.indexOf(arr1[i] ** 2);
       if (correctIndex === -1) {
         return false;
       }
       arr2.splice(correctIndex, 1);
     }
     return true;
   }
       
   ```

2. Better solution

  ```js
  function same(arr1, arr2) {
    if (arr1.length!== arr2.length) {
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
      if (frequencyCounter1[key]!== frequencyCounter2[key ** 2]) {
        return false;
      }
    }
    return true;
  }
  ```
