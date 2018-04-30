import React from "react";
import {Link} from "react-router-dom";

const NotFound = ({store}) => {
  return (
    <div className='notFound'>
        <h2>Oops! :(</h2>
        <p>We can't seem to find this page right now. Return to the <Link to='/'>home page</Link></p>
    </div>
  );
};

export default NotFound;
