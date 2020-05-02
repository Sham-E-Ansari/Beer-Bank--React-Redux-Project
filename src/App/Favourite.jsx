import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';

class Favourite extends React.Component {
   constructor(props) {
      super(props);

      document.title = 'Favourite | The Beer Bank!!!';

      this.state = {
         beer: {}
      }
   };

   componentWillMount() {
      const { dispatch } = this.props;

      beerService.getBeers()
         .then(beers => {
            dispatch(beerActions.getBeers(beers));
         });
   }


   componentWillReceiveProps(newProps) {
      this.setState({ ['beer']: newProps.beer });
   }

   clearFav() {
         this.props.onClearFav(this.props);
   }
   render() {
      return (
         <div className="page">
            <Header />
            <h3 className="favText"> Your Favourites </h3>
            <p className="clearFav" onClick={this.clearFav.bind(this)}> Clear Favourites </p>
            <div className="container">
               {
               this.props.beers.map(br => <Beer details={br}></Beer>)
            }
            </div>
            
         </div>
      );
   }
}

function mapStateToProps(state) {
   const { beer } = state;
   return {
      beers: beer.fav
   };
}
const mapDispachToProps = dispatch => {
   return {
     onClearFav: (beers) => dispatch(beerActions.clearFavBeers(beers)),
   };
 };
const connectedFavourite = connect(mapStateToProps , mapDispachToProps)(Favourite);
export { connectedFavourite as Favourite };
