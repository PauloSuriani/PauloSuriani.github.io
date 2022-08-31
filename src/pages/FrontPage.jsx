import React from 'react';
import MiniBio from '../components/MiniBio';

class FrontPage extends React.Component {
  render() {
    return (
      <div className='container max-w-screen-md'>

        <header className='lg:text-7xl md:text-6xl sm:text-5xl text-4xl p-0'>
          Paulo Vitor Suriani
        </header>

        <MiniBio />
        
      </div>
    );
  }
}

export default FrontPage;