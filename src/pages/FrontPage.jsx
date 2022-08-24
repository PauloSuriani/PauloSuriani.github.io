import React from 'react';
import MiniBio from '../components/MiniBio';

class FrontPage extends React.Component {
  render() {
    return (
      <div className='container max-w-prose'>
        <h1 className='text-5xl p-0'>Paulo Vitor Suriani</h1>
        <MiniBio />
      </div>
    );
  }
}

export default FrontPage;