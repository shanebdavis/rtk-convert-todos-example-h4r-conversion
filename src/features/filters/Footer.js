import React from 'react'
import { Link } from './Link'
import { filterTypes, useFilter } from './filterSlice'

export const Footer = () => {
  const currentFilter = useFilter()
  return <div>
    <span>Show: </span>
    {Object.keys(filterTypes).map((name) =>
      <Link
        key={name}
        active={currentFilter === filterTypes[name]}
        filterName={name}>
        {name}
      </Link>
    )}
  </div>
}