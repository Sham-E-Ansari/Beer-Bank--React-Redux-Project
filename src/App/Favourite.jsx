import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';

class Favourite extends React.Component {
   constructor(props) {
      super(props);
      
      document.title = 'Favourite | React Redux REST API Boilerplate';

      this.state = {
         beer: {}
      }
   };

   componentWillMount(){
      const { dispatch } = this.props;

      beerService.getBeers()
      .then(beers => {
         dispatch(beerActions.getBeers(beers));
      });
   }


   componentWillReceiveProps(newProps){
      this.setState({['beer']: newProps.beer});
   }

   render() {
      const { beer } = this.state;

      return (
         <div className="page">
            <Header/>
            <h1>Favourite</h1>
           <Beer details={beer}/>
         </div>
      );
   }
}

function mapStateToProps(state) {
   const {beer} = state;
   return {
      beer
   };
}

const connectedFavourite = connect(mapStateToProps)(Favourite);
export { connectedFavourite as Favourite };
