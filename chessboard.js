// create a string that represents an 8 x 8 grid
// use new line characters to seperate lines
// at each position of the grid there is either a space or # character
// the characters should form a chessboard
// pass this string to console.log


// SOLUTION 1

// let chessboard = [" # # # #", "# # # #", " # # # #", "# # # #", " # # # #", "# # # #", " # # # #", "# # # #"]

// for (let i = 0; i <= chessboard.length; i++) {
//     console.log(chessboard[i])
// }

// SOLUTION 2

for (let i = 0; i < 4; i++) {
    let lines = ' # # # #\n# # # #'
    console.log(lines)
}