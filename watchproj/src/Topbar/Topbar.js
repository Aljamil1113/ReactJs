import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
  return(
      <div>
          <nav className={classes.Topbar}>
          <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578&ssl=1" 
          alt="Amazon logo"></img>
          </nav>
      </div>
  )
}

export default Topbar;