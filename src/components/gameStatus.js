import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './gameStatus.css'
import { connect } from 'react-redux'
import { playerProgress } from '../lib/game'



export class GameStatus extends PureComponent {
  static propTypes = {
    gameStatus: PropTypes.number
  }



  render() {
    return (
      <div id="status">
        <p>Status: {this.props.status} %</p>
      </div>
    )
  }
}

const mapStateToProps = ({ board, locked }) => {
  return {
    status: Math.floor(playerProgress(board, locked)*100)
  }
}

export default connect(mapStateToProps)(GameStatus)
