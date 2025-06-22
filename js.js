    let c=0;
    let board = ["", "", "", "", "", "", "", "", ""];
    function count(cellId)
    {
        const cell =document.getElementById(cellId);
        let index = parseInt(cellId.split("_")[1]) - 1;
        console.log(c);
        c++;
        let input=c%2===0?"X":"O";
        cell.innerText=input;
        board[index]=input;
        
    if(c===9)
    {
        document.getElementById("result").innerHTML="<p>Match Draw....🤞🤞🤞</p>"
        console.log(board)

    }

      if (checkWin(input)) {
      document.getElementById("result").innerText = `Player ${input} wins..😍😍😍😍`;
      disableAllCells();
      return;
    }

    } 
    function disableAllCells() 
    {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`cell_${i}`).disabled = true;
    }
    }

    function checkWin(player) {
    const win = 
    [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]
    ];

    for (let combo of win) 
    {
      if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
        return true;
      }
    }
    return false;
  }


document.getElementById("resetGame").onclick = function () {
    for (let i = 1; i <= 9; i++) {
        const cell = document.getElementById(`cell_${i}`);
        cell.innerText = "";
        cell.disabled = false;
    }
    board = ["", "", "", "", "", "", "", "", ""]; 
    c = 0;
    document.getElementById("result").innerHTML = "";
};

document.getElementById("newGame").onclick = function () {
    location.reload(); 
};
