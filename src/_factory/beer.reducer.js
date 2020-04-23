export function beer(state = {}, action) {
  switch (action.type) {
    case 'GET_BEERS':
      return action.beers[0]
    default:
      return {
        ...state,
        'beers': []
      }
  }
}
