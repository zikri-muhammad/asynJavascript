/**
 * @copyright ocudev
 * @author Muhammad Zikri <muhammadzikri598@gmail.com>
 * Created: Tue Jan 31 2023
 * Time: 13:40 WIB (GMT+7)
 */


// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


// const number = function(busStops){
//     return busStops.reduce((remaining, [on, off]) => {
//         console.log(remaining);
//         console.log(on);
//         console.log(off);
//         return remaining + on - off
//     }, 0);
// };

// const number = function(busStops){
//    let num = 0
//    for (let i = 0; i < busStops.length; i++) {
//         num += busStops[i][0];
//         num -= busStops[i][1];
//    }
//    return num
// };
// console.log(number([[10,0],[3,5],[5,8]]))

// const moment = require('moment');
import moment from 'moment';

let date = moment().utcOffset("+07:00").format();
console.log(date);