import React from "react";

import './styles.css';


class Footer extends React.Component {
  render() {
    return (
      <div className='row main-bg-color center-block text-center'>
          <p className='main-font-color'>Copyright @ 20202 React Code Challenge. All Rights Reserved.</p>
          <p className='main-font-color'>Use of pokemon images performed under fair user.</p>
          <p className='main-font-color'>Not for sale or redistribution.</p>
      </div>
    );
  }
}


export default Footer;
