function monkeyCount(n) {
  let monkeys = [];
  for (let i = 1; i <= n; i++) {
    monkeys.push(i);
  }
  return monkeys;
}

console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(9));
console.log(monkeyCount(10));
console.log(monkeyCount(20));