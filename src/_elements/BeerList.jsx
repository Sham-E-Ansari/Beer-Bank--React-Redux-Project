import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { Beer, Header } from './../_elements';
import { beerActions, beerService } from './../_factory';

const BeersList = props => {
  return (
    <div className="beerlist">
      { props.details.map((beer, index) => {
        return (
          <Beer details={beer}/>
        )
      }) }

    </div>

  )
}

export default BeerList;
