import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';

const Link = ({ active, children, onClick }) => {

  return (
    <RaisedButton
      href=""
      disabled={active}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </RaisedButton>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link