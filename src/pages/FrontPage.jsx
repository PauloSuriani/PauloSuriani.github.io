import React from 'react';
import MiniBio from '../components/MiniBio';

class FrontPage extends React.Component {
  render() {
    return (
      <div className='container max-w-screen-md'>
        <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl p-0'>
          Paulo Vitor Suriani
        </h1>
        <MiniBio />
      </div>
    );
  }
}

export default FrontPage;