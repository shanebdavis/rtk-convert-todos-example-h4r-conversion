import { createReduxModule } from 'hooks-for-redux'

export const filterTypes = {
  all: () => true,
  completed: t => t.completed,
  active: t => !t.completed
}

export const [useFilter, { setFilter }] = createReduxModule(
  'filters',
  filterTypes.all,
  { setFilter: (__, filter) => filterTypes[filter] || filterTypes.all }
)