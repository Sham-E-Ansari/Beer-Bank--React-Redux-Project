import React from 'react';


class Popup extends React.Component{
	
	constructor(props){
		super(props);
	};

	render(){
		const beer = this.props.details;
		return(
			<div className='popup'>
				<div className='popupInner'>
					<div>
						<img className="popupInner__image" src={beer.image_url} alt={beer.name} title={beer.name} />
					</div> 
					<div className="beerDescription">
						<div className="beerDescription__name">
							<h3>{beer.name}</h3>
						</div>
						<div className="beerDescription__tagline">
							<h6>{beer.tagline}</h6>
						</div>
						<div className="beerDescription__details">
			                <span><b>IBU: </b> {beer.ibu}</span>
			                <span><b>ABV: </b> {beer.abv}</span>
			                <span><b>EBC: </b> {beer.ebc}</span>
			            </div>
		                <div className="beerDescription__about">
		                	<p>{beer.description}</p>
		                </div>
		                <div className="beerDescription__serve">
		                	<b>Best served with: </b>
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

export default Popup;