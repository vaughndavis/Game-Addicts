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

