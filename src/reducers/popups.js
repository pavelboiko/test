const INITIAL_STATE = {
  show: false,
}

export default (state = INITIAL_STATE, { type }) => {
  switch(type) {
    case 'SHOW_POPUP':
      return Object.assign({}, state, { show: true });

    case 'CLOSE_POPUP':
      return Object.assign({}, state, { show: false });

    default:
      return state;
  }
}
