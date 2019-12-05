import { useRedux } from 'hooks-for-redux'

export const filterTypes = {
  all: () => true,
  completed: t => t.completed,
  active: t => !t.completed
}

export const [useFilter, { setFitler }] = useRedux(
  'filters',
  filterTypes.all,
  { setFitler: (__, filter) => filterTypes[filter] || filterTypes.all }
)