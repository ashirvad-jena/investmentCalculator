import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function deriveWinner(gameBoard, players) {
  let winner
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }
  return winner
}

function getGameBoard(gameTurns) {
  let gameBoard = JSON.parse(JSON.stringify(INITIAL_GAME_BOARD))
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  return gameBoard
}

function App() {

  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = getActivePlayer(gameTurns)
  const gameBoard = getGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const updatedTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: getActivePlayer(prevTurns)
      }, ...prevTurns]

      return updatedTurns
    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(oldNames => {
      return {
        ...oldNames,
        [symbol]: newName
      }
    })
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialName={PLAYERS.X}
          symbol={"X"}
          isActive={activePlayer === 'X'}
          onChangeName={handlePlayerNameChange}>
        </Player>
        <Player
          initialName={PLAYERS.O}
          symbol={"O"}
          isActive={activePlayer === 'O'}
          onChangeName={handlePlayerNameChange}>
        </Player>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <GameBoard
        onSelectSquare={handleSelectSquare}
        board={gameBoard} />
    </div>
    <Log turns={gameTurns} />
  </main>
}

export default App
