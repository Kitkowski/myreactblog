import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div className='tc bg-light-blue pa3 shadow-5'>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
   
    <Link to="/">Go back to the homepage</Link><br />
    <Link to="/page-3/">Go to page 2</Link>
     <p><img src="https://source.unsplash.com/random/400x200" alt="" /></p>
  </div>
);


