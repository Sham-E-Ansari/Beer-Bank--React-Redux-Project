export const beerActions = {
    getBeers,getAllBeers, clearFavBeers,addFavBeers,delFavBeers
};

function getBeers(beers) {
    return { type: 'GET_BEERS', beers };
}
function getAllBeers(beers) {
    return { type: 'GET_ALL_BEERS', beers };
}

function clearFavBeers(beers) {
    return { type: 'CLEAR_FAV_BEERS', beers };
}
function addFavBeers(newfav) {
    return { type: 'ADD_FAV_BEER', newfav };
}
function delFavBeers(delfav) {
    return { type: 'DEL_FAV_BEER', delfav };
}