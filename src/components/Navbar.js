import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand  " href="#">
            <img
              src="card.png"
              alt="card image"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            MyCart
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
