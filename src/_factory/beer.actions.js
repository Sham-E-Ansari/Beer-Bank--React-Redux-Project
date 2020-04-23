export const beerActions = {
    getBeers
};

function getBeers(beers) {
    return { type: 'GET_BEERS', beers };
}

