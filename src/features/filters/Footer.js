import React from 'react'
import Link from './Link'
import { filters, useFilters } from './filtersSlice'

const Footer = () => {
  const currentFilter = useFilters()
  return <div>
    <span>Show: </span>
    {Object.keys(filters).map((name) =>
      <Link
        key={name}
        active={currentFilter === filters[name]}
        filterName={name}>
        {name}
      </Link>
    )}
  </div>
}

export default Footer
