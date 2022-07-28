import React from "react";
import "../css/Header.css";

function Header(){
   return (
     <ul className="navbar">
       <li className="nav-item">
         Weather
         <div className="ping"></div>
       </li>
       <li className="nav-item">Map</li>
       <li className="nav-item">News</li>
       <li className="nav-item">Alert</li>
     
     </ul>
   );
}
export default Header;