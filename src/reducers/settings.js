const INITIAL_STATE = {
  items: [],
  visiblePopups: 1,
  loading: false,
  success: false,
  error: false,
}

export default (state = INITIAL_STATE, { type, items }) => {
  switch (type) {
    case 'FETCH_PLANETS_REQUEST':
      return Object.assign({}, state, {
        loading: true,
        error: false,
        success: false,
      });

    case 'FETCH_PLANETS_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        error: false,
        success: true,
        items: items.map((item, index) => Object.assign({}, item, { id: `planet-${index}` }))
      });

    case 'FETCH_PLANETS_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: true,
        success: false
      });

    case 'INCREMENT':
      return Object.assign({}, state, {
        visiblePopups: (state.visiblePopups + 1 <= state.items.length)
          ? state.visiblePopups + 1
          : state.items.length
      });

    case 'DECREMENT':
      return Object.assign({}, state, {
        visiblePopups: (state.visiblePopups - 1 >= 1)
          ? state.visiblePopups - 1
          : 1
      });

    default:
      return state;
  }
}
