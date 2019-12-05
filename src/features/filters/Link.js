import React from 'react'
import {setVisibilityFilter} from './filtersSlice'

const Link = ({ active, children, filterName }) => (
  <button
    onClick={() => {console.log("setv:" + filterName);setVisibilityFilter(filterName);}}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link
