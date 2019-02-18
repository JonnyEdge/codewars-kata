function printerError(s) {
  const array = s.split("")
  const total = s.length
  let errors = 0
  
  for (i = 0; i < array.length; i++) {
    if (/[n-z]/.test(array[i])) {
      errors++
    } 
  }
  
  return `${errors}/${total}`
}

console.log(printerError("aaabbbbhaijjjm"))
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))