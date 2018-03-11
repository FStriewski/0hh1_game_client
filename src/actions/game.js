import { CREATE_GAME, MOVE } from './types'
import { fillBoard } from '../lib/game'
import * as request from "superagent";

const baseUrl = "http://localhost:4002";

export const createGame = (rows = 6) => {
  const [board, locked] = fillBoard(rows)
  return {
    type: CREATE_GAME,
    payload: {
      board,
      locked
    }
  }
}

export const move = (row, col) => ({
  type: MOVE,
  payload: {
    row,
    col
  }
})


// Redux only:
// export const createGame = (rows = 6) => {
//   const [board, locked] = fillBoard(rows)
//   return {
//     type: CREATE_GAME,
//     payload: {
//       board,
//       locked
//     }
//   }
// }
//
// export const move = (row, col) => ({
//   type: MOVE,
//   payload: {
//     row,
//     col
//   }
// })
