export function beer(state = {}, action) {
  switch (action.type) {
    case 'GET_BEERS':
      return action.beers[0]
      
    case 'GET_ALL_BEERS':
      return action.beers
      
    default:
      return {
        ...state,
        'beers': []
      }
  }
}
