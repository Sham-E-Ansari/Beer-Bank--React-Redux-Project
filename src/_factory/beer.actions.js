export const beerActions = {
    getBeers,getAllBeers
};

function getBeers(beers) {
    return { type: 'GET_BEERS', beers };
}

function getAllBeers(beers) {
    return { type: 'GET_ALL_BEERS', beers };
}
