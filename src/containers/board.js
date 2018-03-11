// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from '../components/square'
import { connect } from 'react-redux'
import './board.css'
import {duplicateRows, duplicateCols} from '../lib/game'

export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    return (
      <Square key={index} value={value} col={index} row={rowIndex}/>
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}



// const mapStateToProps = (reduxState) => {
//   // return an object with the prop names (keys) and prop values
//   // taken from the reduxState (values)
//   return {
//     board: reduxState.board
//   }
// }

const mapStateToProps = ({ board }) => ({ board })


export default connect(mapStateToProps)(Board)



// Returns an array of indices of the columns on the board
// that are identical.
// export const duplicateRows = (board) => {
//   return board.map((row, index) => (
//     board
//     .filter((row2, index2) => (index !== index2 && areIdentical(row, row2)))
//     .length > 0 ? index : null
//   )).filter(v => v !== null)
// }
//
// // Returns an array of indices of the columns on the board
// // that are identical.
// export const duplicateCols = (board) => {
//   return cols(board).map((col, index) => (
//     cols(board)
//     .filter((col2, index2) => (index !== index2 && areIdentical(col, col2)))
//     .length > 0 ? index : null
//   )).filter(v => v !== null)
// }
