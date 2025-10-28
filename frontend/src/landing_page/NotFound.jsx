import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return ( 
        <div className='text-center'>
        
        <h1>404 Not Found</h1>
        Sorry, the page you are looking for does not exist.<br />
        <Link to={"/"} style={{textDecoration:"none"}}>Homepage</Link>
        
        </div>
     );
}

export default NotFound;