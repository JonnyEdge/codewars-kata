function ballCollector(detritus) {
    let ballSack = detritus.filter(function(justTennisBalls) {
        return justTennisBalls === 58
    })

    const sack = {
        weight: 0,
    }

    sack.weight = ballSack.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
    }, 0)
    
    return sack
}

console.log(ballCollector([58, 68, 62, 69, 58]))
console.log(ballCollector([60, 66, 71, 68, 62]))
console.log(ballCollector([58]))
console.log(ballCollector([58, 58, 58]))

/* function ballCollector(detritus) {
    let sack = detritus.filter(function(justTennisBalls) {
        return justTennisBalls === 58
    })
    let weight = sack.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)
    return weight
} 

Original solution that didn't return the weight as a property within a sack object like the kata asked */