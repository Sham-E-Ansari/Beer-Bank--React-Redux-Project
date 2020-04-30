import React from 'react';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

class Popup extends React.Component{
	
	constructor(props){
		super(props);
	};
	toggleFav() {
      console.log(this.props.fav)
      if (this.props.fav.some(item => item.id ==this.props.details.id))
      {
         this.props.onDelFav(this.props.details)
      } 
      else
      {
         this.props.onAddFav(this.props.details)
      }
   }  
	render(){
		const beer = this.props.details;
		let favState = this.props.fav.some(item => item.id ==this.props.details.id)
		return(
			<div className='popup'>
				<div className='popupInner'>
					<div>
						<img className="popupInner__image" src={beer.image_url} alt={beer.name} title={beer.name} />
					</div> 
					<div className="beerDescription">
						<div className="beerDescription__name">
							<div>
								<h3>{beer.name}</h3>
							</div>
							<div className="beerDescription__fav">
				               <p onClick={this.toggleFav.bind(this)}>
				                  { favState ? <FaStar /> : <FiStar /> }
				               </p>
				            </div>
						</div>
						<div className="beerDescription__tagline">
							<h6>{beer.tagline}</h6>
						</div>
						<div className="beerDescription__details">
			                <div>
			                	<b>IBU: </b> {beer.ibu}
			                </div>
			                <div>
			                	<b>ABV: </b> {beer.abv}
			                </div>
			                <div>
			                	<b>EBC: </b> {beer.ebc}
			                </div>
			            </div>
		                <div className="beerDescription__about">
		                	<p>{beer.description}</p>
		                </div>
		                <div className="beerDescription__servedtitle">
		                	<b>Best served with: </b>
		                	
		                </div>
		                <div className="beerDescription__serve">
		                	<ul>
			                    {beer.food_pairing.map((food, index) =>
			                      <li key={index}>{food}</li>
			                    )}
			                  </ul>
		                </div>
					</div>
					<div>
						<a className="close" onClick={this.props.closePopup}></a>
					</div>
				</div>

			</div>
			);

	}
}

//export default Popup;

function mapStateToProps(state) {
   const {beer} = state;
   return {
      fav : beer.fav
   };
}

const mapDispachToProps = dispatch => {
   return {
     onAddFav: (id) => dispatch({ type: "ADD_FAV_BEER", newfav: id}),
     onDelFav: (id) => dispatch({ type: "DEL_FAV_BEER", newfav: id})
   };
 };
export default connect(
   mapStateToProps,
   mapDispachToProps
 )(Popup);