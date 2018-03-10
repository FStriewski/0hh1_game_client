import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { move } from '../actions/game'
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

 handleClick = () => {
   this.props.move(this.props.row, this.props.col)
 }

  render() {
    return (
      <div
        //<Square key={index} value={value} row={index} col={rowIndex}/>
            className={this.classNames()}
            onClick={this.handleClick}
          />
    )
  }
}

//const mapStateToProps = ({ row,col }) => ({ row,col })
export default connect(null, { move })(Square)
