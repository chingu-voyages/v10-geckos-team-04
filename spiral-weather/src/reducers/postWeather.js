export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return action.payload;
    default:
      return state;
  }
};
