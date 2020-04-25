import config from 'config';
const apiRoot = 'https://api.punkapi.com/v2';

export const beerService = {
   getBeers
};

const requestOptions = {
    method: 'GET'
};

function getBeers() {
   return fetch(`${apiRoot}/beers/`, requestOptions)
      .then(handleGetResposne)
      .then(res => {
         return res;
         console.log(res);
   });
}

function handleGetResposne(response){
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      return data;
   });
}
