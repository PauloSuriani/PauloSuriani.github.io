import React from 'react';
import MiniBio from '../components/MiniBio';

class FrontPage extends React.Component {
  render() {
    return (
    <>
      <h1 className='text-5xl p-0'>Paulo Vitor Suriani</h1>
      <MiniBio />
    </>
    );
  }
}

export default FrontPage;