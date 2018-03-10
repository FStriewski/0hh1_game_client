// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from '../components/square'
import { connect } from 'react-redux'
import './board.css'

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
      <Square key={index} value={value} />
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



const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    board: reduxState.board
  }
}

// Shorter: const mapStateToProps = ({ board }) => ({ board })

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
