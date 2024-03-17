# Problem solving approach

## Introduction ot problem solving

### What is an algorithm?

A process or set of steps to solve a problem.

Almost everything that you do in programming involves some kind of algorithm!

How to improve

1. Devise a plan for solving a problems
2. Master common problem solving patterns

### Problem solving strategies

1. Understand the Problem
2. Explore Concrete Examples
3. Break it down
4. Solve it/Simplify it
5. Look Back and Refactor

#### Understand the Problem

Questions to ask:

1. Can you restate the problem in my own words?
2. What are the inputs to the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do you have enough information to solve the problem?
5. How should you label the important parts of data that are a part of teh problem?

#### Explore Concrete Examples

Come up with examples that can help you understand the problem better.

1. Start with simple examples
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

Ex. Write a function that takes in a string and returns counts of each letter in the string.

1. "apple" -> {'a': 1, 'p': 1, 'l': 2, 'e': 1}
   "hello" -> {'h': 1, 'e': 1, 'l': 2, 'o': 1}
2. "my phone number is 1234235" - do we count the numbers, do we count spaces?
   "Hello hi" - what about uppercase vs lowercase? is it the same or different?
3. charCount() or charCount('')
4. what about if we receive non string input?

#### Break it down

Explicitly write out hte steps you need to take

From prev example

Write the pseudo code

```js
function charCount(str) {
  // make object to return at the end
  // loop over string
  // if char is a number or letter then
       // if char in object, increment count
       // if cher is not in the object, add it to the object and set value to 1
    // if cher is something else (space, period, etc.) do not do anything
  // return object
}
```

#### Solve it/Simplify it

**Solve the problem.** *if you  cant...* **Solve a simpler problem**

##### Smplify

- find the core difficulty in what you are trying ot do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back into the solution

1. Write the code
2. Test it
3. Refactor
4. Repeat

```js
function charCount(str) {
  // make object to return at the end
  const result = {};
  // loop over string
  for (let ch of str) {
    // make char lowercase
    ch = ch.toLowerCase()
    // if char is a number or letter then
    // do not know how to do yet
    if (result[ch]) {
      // if char in object, increment count
      result[ch] += 1;
      } else {
        // if cher is not in the object, add it to the object and set value to 1
        result[ch] = 1;
      }
      // if cher is something else (space, period, etc.) do not do anything
  }
  // return object
  return result;
}
```

#### Look Back and Refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refractor?
- How have other people solved the problem?
