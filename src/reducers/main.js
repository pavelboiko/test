const INITIAL_STATE = {
  checked: false,
  active: null,
}

export default (state = INITIAL_STATE, { type, id }) => {
  switch (type) {
    case 'TOGGLE_SELECT_ALL':
      return Object.assign({}, state, { checked: !state.checked, active: null });

    case 'SELECT_POPUP':
      return Object.assign({}, state, { active: id });

    default:
      return state;
  }
}
