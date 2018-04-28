import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Nav = ({store}) => {
  return (
    <div className='navigation-nav'>
      <nav>
        <ul>
          {store.pages && (
            store.pages.map(page => {
              return <li key={page}>
                <NavLink className="nav-item-link" to={`/${page}`}>
                  <p className='nav-text'>{page}</p>
                </NavLink>
              </li>
            })
          )}
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  store: PropTypes.object.isRequired
}

export default observer(Nav);
