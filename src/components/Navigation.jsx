import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav>
        <div>
          <Link class="navbar-brand" to="/">
            Tic tac toe with React
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Game" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Game">
                  Game
                </Link>
              </li>        
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
