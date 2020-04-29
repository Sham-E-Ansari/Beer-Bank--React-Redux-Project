import React from 'react';
import Popup from './../_elements/Popup.jsx';

class Beer extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         showPopup: false,
         beerId: 1 
      };
      this.togglePopup = this.togglePopup.bind(this);
   };

   togglePopup() {  
      this.setState({  
           showPopup: !this.state.showPopup
      });
      
    }  
   render() {
      const beer = this.props.details;
      return (
         <div className="beer" onClick={this.togglePopup}>
            {beer &&
            <div>
               <img className="beer__image" src={beer.image_url} alt={beer.name} title={beer.name} />
               <h3 className="beer__name">{beer.name}</h3>
               <p className="beer__tagline">{beer.tagline}</p>
            </div>

            }
            { this.state.showPopup ? <Popup details={beer}></Popup>: null }
         
         </div>
         
      );
   }
}
export default Beer;
