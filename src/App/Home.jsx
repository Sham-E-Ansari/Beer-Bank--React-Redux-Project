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
         beer: {}
      }
   };

   componentWillMount(){
      const { dispatch } = this.props;
      beerService.getAllBeers()
      .then(beers => {
         dispatch(beerActions.getAllBeers(beers));
         console.log(beers);
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
            <div className="container">
            	{Object.keys(this.props.beers).length > 1 ? this.props.beers.map(br => <Beer details={br}></Beer>) : ""}
            	
               <Beer details={beer}/>
               <Beer details={beer}/>
               <Beer details={beer}/>
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
   // const {beer} = state;
   return {
      beers: state.beer
   }
}
const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
