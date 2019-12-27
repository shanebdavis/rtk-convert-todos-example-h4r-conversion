import React from 'react'
import { setFilter } from './filterSlice'

export const Link = ({ active, children, filterName }) =>
  <button
    onClick={() => setFilter(filterName)}
    disabled={active}
    style={{marginLeft: '4px'}}
  >{children}</button>