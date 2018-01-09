import React from 'react'
import FilterLink from '../react-containers/FilterLink'
import { VisibilityFilters } from '../redux-actions'
const Footer = () => (
  <p>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
  </p>
)

export default Footer