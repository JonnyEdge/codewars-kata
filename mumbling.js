function accum(s) {
    const letters = s.toLowerCase().split('')
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
    }
    
    return letters.join('-') // [ 'Z', 'p', 'g', 'l', 'n', 'R', 'x', 'q', 'e', 'n', 'U' ]
}

/* function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

Codewars best practice solution */

console.log(accum("ZpglnRxqenU"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))