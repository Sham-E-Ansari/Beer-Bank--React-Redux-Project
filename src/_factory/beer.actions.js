export const beerActions = {
    getBeers,getAllBeers, getFavBeers
};

function getBeers(beers) {
    return { type: 'GET_BEERS', beers };
}

function getAllBeers(beers) {
    return { type: 'GET_ALL_BEERS', beers };
}
function getFavBeers(beers) {
    return { type: 'GET_FAV_BEERS', beers };
}
function clearFavBeers(beers) {
    return { type: 'CLEAR_FAV_BEERS', beers };
}