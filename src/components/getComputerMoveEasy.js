
export const getComputerMoveEasy = (board) => {
    const availableMoves = [];
  
    // Find all available moves on the board
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        availableMoves.push(i);
      }
    }
  
    // Choose a random move from available moves
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const randomMove = availableMoves[randomIndex];
  
    return randomMove;
};