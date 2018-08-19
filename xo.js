function XO(str) {
    
    if (!str) {
        return true
    } else {
        
    }
    
    if (str) {
        exs = str.match(/x/gi) || []
        ohs = str.match(/o/gi) || []
        return exs.length === ohs.length
    } else {
        return false        
    }
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))
console.log(XO(''))