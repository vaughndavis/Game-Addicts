[1mdiff --git a/index.js b/index.js[m
[1mindex 6a30331..fb2edfd 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -7,29 +7,56 @@[m [mlet board = [[m
     ["-", "-", "-"][m
 ][m
 [m
[31m-const ticTackToe = () => {[m
[32m+[m[32mconst map = new Map()[m
[32m+[m[32mmap.set("1", {x: 0, y:0})[m
[32m+[m[32mmap.set("2", {x: 0, y:0})[m
[32m+[m[32mmap.set("3", {x: 0, y:0})[m
[32m+[m[32mmap.set("4", {x: 0, y:0})[m
[32m+[m[32mmap.set("5", {x: 0, y:0})[m
[32m+[m[32mmap.set("6", {x: 0, y:0})[m
[32m+[m[32mmap.set("7", {x: 0, y:0})[m
[32m+[m[32mmap.set("8", {x: 0, y:0})[m
[32m+[m[32mmap.set("9", {x: 0, y:0})[m
 [m
     const readline = require("readline").createInterface({[m
         input: process.stdin,[m
         output: process.stdout,[m
       });[m
       [m
[31m-      readline.question("Where do you want to play? ", (spot) => {[m
[31m-        [m
[31m-        if(spot === 1) {[m
[31m-            board[0][0] === "X"[m
[31m-        } else (spot === 2) [m
[31m-            board[0][2] === "X"[m
[31m-        [m
[31m-        [m
[31m-        [m
[31m-        [m
[31m-        console.log("Spot", spot);[m
[31m-        console.log(board)[m
[32m+[m[32m      let playing = true[m
[32m+[m[32m      let playerTurn = "X"[m
[32m+[m[41m      [m
[32m+[m[32m      const play = () => {[m
         [m
[31m-        readline.close();[m
[31m-      });[m
[31m-[m
[32m+[m[32m        readline.question("Where do you want to play? ", (spot) => {[m
[32m+[m[32m        console.log(`SPOT:${spot}`)[m
[32m+[m[41m            [m
[32m+[m[32m            if(!map.get(spot)) {[m
[32m+[m[32m                console.log("Hey what are you trying to do??")[m
[32m+[m[32m            } else {[m
[32m+[m[32m                const { x, y } = map.get(spot)[m
[32m+[m[32m                board[x][y] = playerTurn[m
[32m+[m[32m            }[m
[32m+[m[41m             [m
[32m+[m[41m            [m
[32m+[m[32m            console.log(`${board[0]} ${board[1]} ${board[2]}`)[m
[32m+[m[41m            [m
[32m+[m[32m            readline.question("End game?", (stop) => {[m
[32m+[m[32m                if(stop === "y") {[m
[32m+[m[32m                    playing = false[m
[32m+[m[32m                }[m
[32m+[m
[32m+[m[32m                if(playing) {[m
[32m+[m[32m                    play()[m
[32m+[m[32m                } else {[m
[32m+[m[32m                    readline.close()[m
[32m+[m[32m                }[m
[32m+[m[32m            })[m
[32m+[m
[32m+[m[32m          });[m
[32m+[m[32m      }[m
[32m+[m[41m      [m
[32m+[m[32mplay()[m
 //not this yet[m
     const checkRow = (row = []) => {[m
 [m
[36m@@ -53,9 +80,9 @@[m [mconst ticTackToe = () => {[m
 [m
 [m
 [m
[31m-}[m
 [m
[31m-ticTackToe(board)    [m
[32m+[m
[32m+[m[32m//ticTackToe(board)[m[41m    [m
 [m
 // //across the top[m
 // if(board[0][0] === "X" || board[0][0] === "O" && board[0][1] === board[0][0] && board[0][2] === board[0][0]) {[m
[36m@@ -118,14 +145,3 @@[m [mlet temp = [][m
 }[m
 */[m
 [m
[31m-[m
[31m-  const map = new Map()[m
[31m-  map.set("1", {x: 0, y:0})[m
[31m-  map.set("2", {x: 0, y:0})[m
[31m-  map.set("3", {x: 0, y:0})[m
[31m-  map.set("4", {x: 0, y:0})[m
[31m-  map.set("5", {x: 0, y:0})[m
[31m-  map.set("6", {x: 0, y:0})[m
[31m-  map.set("7", {x: 0, y:0})[m
[31m-  map.set("8", {x: 0, y:0})[m
[31m-  map.set("9", {x: 0, y:0})[m
\ No newline at end of file[m
