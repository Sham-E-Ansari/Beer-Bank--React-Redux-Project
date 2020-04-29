export function beer(state = {}, action) {
  switch (action.type) {
    case 'GET_BEERS':
      return {
      	...state,
        'random': action.beers[0]
      }
      
    case 'GET_ALL_BEERS':
      return {
      	...state,
        'beers': action.beers
      }

    default:
      return {
        ...state,
        'beers': []
      }
  }
}
