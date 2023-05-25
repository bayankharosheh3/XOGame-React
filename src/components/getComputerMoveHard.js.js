import { calculateWinner } from "./calculateWinner";


export const getComputerMove = (board) => {
    const availableMoves = [];
  
    // Find all available moves on the board
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        availableMoves.push(i);
      }
    }
  
    // Perform minimax algorithm
    const minimax = (currentBoard, depth, maximizingPlayer) => {
      const winner = calculateWinner(currentBoard);
  
      if (winner === "X") {
        return -1; // X wins
      }
  
      if (winner === "O") {
        return 1; // O wins
      }
  
      if (availableMoves.length === 0) {
        return 0; // Draw
      }
  
      if (maximizingPlayer) {
        let maxEval = -Infinity;
        for (let i = 0; i < availableMoves.length; i++) {
          const move = availableMoves[i];
          const newBoard = [...currentBoard];
          newBoard[move] = "O";
          availableMoves.splice(i, 1); // Remove the move from available moves
          const evaluation = minimax(newBoard, depth + 1, false);
          availableMoves.splice(i, 0, move); // Add the move back to available moves
          maxEval = Math.max(maxEval, evaluation);
        }
        return maxEval;
      } else {
        let minEval = Infinity;
        for (let i = 0; i < availableMoves.length; i++) {
          const move = availableMoves[i];
          const newBoard = [...currentBoard];
          newBoard[move] = "X";
          availableMoves.splice(i, 1); // Remove the move from available moves
          const evaluation = minimax(newBoard, depth + 1, true);
          availableMoves.splice(i, 0, move); // Add the move back to available moves
          minEval = Math.min(minEval, evaluation);
        }
        return minEval;
      }
    };
  
    let bestMove = null;
    let bestEval = -Infinity;
  
    // Find the best move using minimax
    for (let i = 0; i < availableMoves.length; i++) {
      const move = availableMoves[i];
      const newBoard = [...board];
      newBoard[move] = "O";
      availableMoves.splice(i, 1); // Remove the move from available moves
      const evaluation = minimax(newBoard, 0, false);
      availableMoves.splice(i, 0, move); // Add the move back to available moves
      if (evaluation > bestEval) {
        bestEval = evaluation;
        bestMove = move;
      }
    }
  
    return bestMove;
  };
  