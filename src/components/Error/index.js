import React from 'react';


class ErrorView extends React.Component {

  render() {
    return (
      <div className='center-block text-center'>
        <h2>Something went wrong.</h2>
        <h2>We weren't able to find any pokemon.</h2>
      </div>
    );
  }
}


export default ErrorView;
