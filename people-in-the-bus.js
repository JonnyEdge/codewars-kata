let number = function(busStops){
    let people = 0
    for (let i = 0; i < busStops.length; i++) {
        people += (busStops[i][0] - busStops[i][1])
    }
    return people
  }

/* let number = function(busStops) {
    let people = 0 {
        for (let i = 0; i < busStops.length; i ++) {
            people += busStops [i][0]
            people -= busStops [i][1]
        }
    return people
    }
}

Best practice Codewars solutions */

console.log(number[[10,0], [3,5], [5,8]])