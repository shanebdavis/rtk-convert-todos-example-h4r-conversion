import { useRedux } from 'hooks-for-redux'

export const filters = {
  all: () => true,
  completed: t => t.completed,
  active: t => !t.completed
}

export const [useFilters, { setVisibilityFilter }] = useRedux(
  'visibilityFilters',
  filters.all,
  {
    setVisibilityFilter: (__, filter) => {
      console.log("setVis: " + filter)
      return filters[filter] || filters.all
    }
  }
)
