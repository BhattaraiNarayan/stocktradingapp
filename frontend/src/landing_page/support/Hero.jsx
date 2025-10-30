import React from 'react';


function Hero() {
    return ( 
           <div className='containerFluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href='' className='fs-4'>
                 Track Tickets   
                </a>
            </div>
            <div className='row m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket.</h1>
                    <input placeholder='lets start searching'/> <br />
                        <a href=''>Track Account Opening</a>
                        <a href='' style={{marginLeft:"2rem"}}>Track Segment Margins</a>
                        <a href='' style={{marginLeft:"2rem"}}>Intraday Margins</a>
                        <a href='' style={{marginLeft:"2rem"}}>Kite  User Manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li>
                            <a href=''>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href=''>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
  </div>
     );
}

export default Hero;
