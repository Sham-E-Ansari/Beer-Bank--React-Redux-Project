export const beerActions = {
    getBeers,getAllBeers
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

function getAllBeers(beers) {
    return { type: 'GET_ALL_BEERS', beers };
}
