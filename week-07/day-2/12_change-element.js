'use strict';
// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method
// - Print the fourth element as a test

var s = [1, 2, 3, 8, 5, 6]

var s = s.map(function(num) {
    if (num != 8) {
    return num
} else {
    return 4
}
})

console.log(s)
