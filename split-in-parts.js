var splitInParts = function(string, partsOf){
    return string.match(new RegExp('.{1,' + partsOf + '}', 'g')).join(' ')
  }

console.log(splitInParts('supercalifragilisticexpialidocious', 3))
console.log(splitInParts('HelloKata', 1))
console.log(splitInParts('HelloKata', 9))