import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({store}) => {
  return (
    <div className='notFound'>
        <h2>:(</h2>
        <p>Oops that doesn't seem right.</p>
        <p>Return to the <Link to='/'>home page</Link></p>
    </div>
  );
};

export default NotFound;
