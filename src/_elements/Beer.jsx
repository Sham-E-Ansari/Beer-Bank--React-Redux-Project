import React from 'react';
import Popup from './../_elements/Popup.jsx';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

class Beer extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         showPopup: false,
      };
      this.togglePopup = this.togglePopup.bind(this);
      this.toggleFav = this.toggleFav.bind(this);
   };

   togglePopup() {  
      this.setState({  
           showPopup: !this.state.showPopup
      });
      
    }
   toggleFav() {
      console.log(this.props.fav)
      if (this.props.fav.some(beer => beer.id ==this.props.details.id))
      {
         this.props.onDelFav(this.props.details)
      } 
      else
      {
         this.props.onAddFav(this.props.details)
      }
   }  
   render() {
      const beer = this.props.details;
      let favState = this.props.fav.some(beer => beer.id ==this.props.details.id)
      return (
         <div className="beer">
            <div className="fav">
               <p onClick={this.toggleFav}>
                  { favState ? <FaStar /> : <FiStar /> }
               </p>

            </div>
            <div onClick={this.togglePopup}>
               <img className="beer__image" src={beer.image_url} alt={beer.name} title={beer.name} />
               <h3 className="beer__name">{beer.name}</h3>
               <p className="beer__tagline">{beer.tagline}</p>
            </div>
            
            { this.state.showPopup ? <Popup details={beer} closePopup={this.togglePopup}></Popup>: null }
         
         </div>
         
      );
   }
}
function mapStateToProps(state) {
   const {beer} = state;
   return {
      fav : beer.fav
   };
}

const mapDispachToProps = dispatch => {
   return {
     onAddFav: (id) => dispatch({ type: "ADD_FAV_BEER", newfav: id}),
     onDelFav: (id) => dispatch({ type: "DEL_FAV_BEER", delfav: id})
   };
 };
export default connect(
   mapStateToProps,
   mapDispachToProps
 )(Beer);

