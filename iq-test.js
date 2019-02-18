// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 

// Bob observed that one number usually differs from the others in evenness. 

// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers){
  let even = []
  let odd = []
  const array = numbers.split(' ')
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i])
    } else {
      odd.push(array[i])
    }
    
    if ((even.length > odd.length) && (odd.length > 0)) {
      return ((array.indexOf(odd[0])) + 1)
    }
    if ((odd.length > even.length) && (even.length > 0)) {
      return ((array.indexOf(even[0])) + 1)
    }
  }
}

console.log(iqTest('2 1 1 1 1 1 1 1 1'))
console.log(iqTest('1 2 1 1 1 1 1 1 1'))
console.log(iqTest('1 1 2 1 1 1 1 1 1'))
console.log(iqTest('1 1 1 2 1 1 1 1 1'))
console.log(iqTest('1 1 1 1 2 1 1 1 1'))
console.log(iqTest('1 1 1 1 1 2 1 1 1'))
console.log(iqTest('1 1 1 1 1 1 2 1 1'))
console.log(iqTest('1 1 1 1 1 1 1 2 1'))
console.log(iqTest('1 1 1 1 1 1 1 1 2'))