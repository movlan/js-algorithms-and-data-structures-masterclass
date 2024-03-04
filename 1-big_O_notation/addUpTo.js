import Timer from '../timer.js';

const timer = new Timer();

function addUpTo1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

timer.start();
console.log(addUpTo2(100000000))
timer.end();
