let board = [

    ["-", "-", "-"],

    ["-", "-", "-"],

    ["-", "-", "-"]
]

const map = new Map()
map.set("1", {x: 0, y:0})
map.set("2", {x: 0, y:0})
map.set("3", {x: 0, y:0})
map.set("4", {x: 0, y:0})
map.set("5", {x: 0, y:0})
map.set("6", {x: 0, y:0})
map.set("7", {x: 0, y:0})
map.set("8", {x: 0, y:0})
map.set("9", {x: 0, y:0})

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      
      let playing = true
      let playerTurn = "X"
      
      const play = () => {
        
        readline.question("Where do you want to play? ", (spot) => {
        console.log(`SPOT:${spot}`)
            
            if(!map.get(spot)) {
                console.log("Hey what are you trying to do??")
            } else {
                const { x, y } = map.get(spot)
                board[x][y] = playerTurn
            }
             
            
            console.log(`${board[0]} ${board[1]} ${board[2]}`)
            
            readline.question("End game?", (stop) => {
                if(stop === "y") {
                    playing = false
                }

                if(playing) {
                    play()
                } else {
                    readline.close()
                }
            })

          });
      }
      
play()
//not this yet
    const checkRow = (row = []) => {

        if(row[0] === "-") {
            return false
        }
        
        return row.every(element => element === row[0])
    
    }


    // if(checkRow(board[0])) {

    //     console.log(`${board[0][0]} wins the game!`)

    // } else {

    //     console.log("Keep playing")
    // }





//ticTackToe(board)    

// //across the top
// if(board[0][0] === "X" || board[0][0] === "O" && board[0][1] === board[0][0] && board[0][2] === board[0][0]) {
//     winner = `${board[0][0]} wins`
//     console.log(winner)

//     //across the middle
// } else if((board[1][0] === "X" || board[0][0] === "O") && board[1][1] === board[0][0] && board[1][2] === board[0][0]) {
//     winner = `${board[1][0]} wins`
//     console.log(winner)

//     //across the bottom
// } else if((board[2][0] === "X" || board[0][0] === "O") && board[2][1] === board[0][0] && board[2][2] === board[0][0]) {
//     winner = `${board[2][0]} wins`
//     console.log(winner)
    
//     //down the left
// } else if((board[0][0] === "X" || board[0][0] === "O") && board[1][0] === board[0][0] && board[2][0] === board[0][0]) {
//     winner = `${board[0][0]} wins`
//     console.log(winner)
    
//     //down the middle
// } else if((board[0][1] === "X" || board[0][0] === "O") && board[1][1] === board[0][1] && board[2][1] === board[0][1]) {
//     winner = `${board[0][1]} wins`
//     console.log(winner)

//     //down the right
// } else if((board[0][2] === "X" || board[0][0] === "O") && board[1][2] === board[0][2] && board[2][2] === board[0][2]) {
//     winner = `${board[0][2]} wins`
//     console.log(winner)

//     //diagonally down right
// } else if((board[0][0] === "X" || board[0][0] === "O") && board[1][1] === board[0][0] && board[2][2] === board[0][0]) {
//     winner = `${boarboard3[0][0]} wins`
//     console.log(winner)

//     //boardiagonally down left
// } else if((board3[0][2] === "X" || board3[0][0] === "O") && board3[1][1] === board3[0][2] && board3[2][0] === board3[0][2]) {
//         winner = `${board3[0][2]} wins`
//         console.log(winner)
// } 
/*
let temp = []

    for(let row = 0; row < board3.length; row ++) {

        for(let spot = 0; spot < board3[row].length; spot++) {
            
            if(spot === "X" || spot === "O") {
            
                temp.push(spot)
        
        }
    }
   
}
    if(temp.length = 9) {
    console.log("Game is over!")
    }
}
*/

