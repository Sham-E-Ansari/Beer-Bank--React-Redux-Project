import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
   constructor(props) {
      super(props);
   };

   render() {

      return (
         
         <header>
            <div className="logo">
               <span><div className="transB">B</div></span>
               <span>B</span>
            </div>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/favourite">FAVOURITE</NavLink>
            <h2>The Beer Bank</h2>
            <p>YOUR FAVOURITE BEER PROVIDER !</p>
            <form>
             <input type="text" placeholder="Search for beer name" name="search" id="searchBar"/>
            </form>

         </header>
      );
   }
}

export default Header;
