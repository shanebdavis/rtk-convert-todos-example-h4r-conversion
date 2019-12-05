import React from 'react'
import { setFitler } from './filterSlice'

export const Link = ({ active, children, filterName }) =>
  <button
    onClick={() => setFitler(filterName)}
    disabled={active}
    style={{marginLeft: '4px'}}
  >{children}</button>