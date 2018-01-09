import React from 'react'
import FilterLink from '../react-containers/FilterLink'

const Footer = () => (
  <p>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
  </p>
)

export default Footer