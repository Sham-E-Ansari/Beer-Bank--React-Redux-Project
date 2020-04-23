import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
   constructor(props) {
      super(props);
   };

   render() {

      return (
         <header>
            <NavLink exact={true} to="/">HOME</NavLink>
            <NavLink exact={true} to="/favourite">FAVOURITE</NavLink>
         </header>
      );
   }
}

export default Header;
