import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';

class Home extends React.Component {
   constructor(props) {
      super(props);
      
      document.title = 'Home | The Beer Bank!!!';
      this.state = {
         beer: {},
      }
   };

   componentWillMount(){
      const { dispatch } = this.props;
      beerService.getAllBeers()
      .then(beers => {
         dispatch(beerActions.getAllBeers(beers));
         
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
            <h1>All Beers</h1>
            {this.state.showPopup ?<Popup text='Close Me'></Popup> : null}
            <div className="container">
            	{this.props.beers.map(br => <Beer details={br}></Beer> )}
            </div>
         </div>
      );
   }
}
/*
function mapStateToProps(state) {
   const {beer} = state;
   return {
      beer
   };
}
*/
const mapStateToProps = (state) => {
   return {
      beers: state.beer.beers
   }
}
const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
