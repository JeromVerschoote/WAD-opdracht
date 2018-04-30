import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {observer} from 'mobx-react';

const Nav = ({store}) => {
  const {pages} = store;
  return (
    <div className='navigation-nav'>
      <nav>
        <ul>
          {pages && (
            pages.map(page => {
              return <li key={page}>
                  <NavLink extact='true' className="nav-item-link" to={`/${page}`}  activeClassName='selected' >
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
