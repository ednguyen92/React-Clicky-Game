import React from "react";

const NavBar = props => <nav class="navbar fixed-top navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Digimon Clicky Game</a>
  
    <h1 id="rw">{props.answer}</h1>

    <h1 id="cur-sco">Current Score: {props.score} | Top Score: {props.topScore}</h1>
  
</nav>;


// const NavBar = () => (
// <nav class="navbar fixed-top navbar-dark bg-dark">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <span class="navbar-text">
//       Navbar text with an inline element
//     </span>
// </nav>
// );

export default NavBar;