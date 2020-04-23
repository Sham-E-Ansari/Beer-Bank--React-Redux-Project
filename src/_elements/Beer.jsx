import React from 'react';

class Beer extends React.Component {
   constructor(props) {
      super(props);
   };

   render() {
      const beer = this.props.details;

      return (
         <div className="beer">
            {beer &&
            <div>
               <img className="beer__image" src={beer.image_url} alt={beer.name} title={beer.name} />
               <h3 className="beer__name">{beer.name}</h3>
               <p className="beer__tagline">{beer.tagline}</p>
            </div>
            }
         </div>
      );
   }
}

export default Beer;
