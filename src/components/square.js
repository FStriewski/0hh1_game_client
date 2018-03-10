// src/containers/Board.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  classNames() {
   const { value, locked, dupe, error } = this.props

   let classnames = ['Square']
   classnames.push(`fill-${value || 0}`)
   // if (locked) classnames.push('locked')
   // if (dupe) classnames.push('dupe')
   // if (error) classnames.push('wrong')
   return classnames.join(' ')
 }

  render() {
    return (
      <div
            className={this.classNames()}
            onClick={this.handleClick}
          />
    )
  }
}

export default Square
