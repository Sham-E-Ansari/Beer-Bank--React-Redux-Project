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
					{beer &&
			            <div>
			               <img className="popupInner__image" src={beer.image_url} alt={beer.name} title={beer.name} />
			               <h3 className="popupInner__name">{beer.name}</h3>
			               <h6 className="popupInner__tagline">{beer.tagline}</h6>
			               <span>{beer.name}</span>
		                   <span >{beer.tagline}</span>
		                   <span></span>
		                   <span><b>IBU:</b> {beer.ibu}</span>
		                   <span><b>ABV:</b> {beer.abv}</span>
		                   <span><b>EBC:</b> {beer.ebc}</span>
		                   <span>{beer.description}</span>
		                   <span><b>Best served with:</b></span>
			            </div>
            		}
				</div>

			</div>
		);

	}
}

export default Popup;