let num = 0;

function findSum() {
  let sum = 0;
  
  for(let i = 1; i < 40; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
    num += i
  }
   return sum;
}
console.log(findSum());