function maps(x) {
    let xDoubled = x.map(function (x) { return x * 2; })
    return xDoubled
}

// MDN-based solution

/* function maps(x) {
    return x.map(n => n * 2)
}

Best practice Codewars solution */

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));