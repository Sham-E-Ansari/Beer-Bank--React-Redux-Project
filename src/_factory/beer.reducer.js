export function beer(state = {}, action) {
  switch (action.type) {
    case 'GET_BEERS':
      return {
      	...state,
        'favbeer': action.beers[0]
      }
      
    case 'GET_ALL_BEERS':
      return {
      	...state,
        'beers': action.beers
      }
    case 'ADD_FAV_BEER':
      return {
        ...state,
        'fav': state.fav.concat(action.newfav)
      }
    case 'DEL_FAV_BEER':
      return {
        ...state,
        'fav': state.fav.filter(beer => beer.id !== action.delfav.id)
      }
    case 'CLEAR_FAV_BEER':
      return {
        ...state,
        'fav': []
      }
    default:
      return {
        ...state,
        'beers': [],
        'fav': []
      }
  }
}
