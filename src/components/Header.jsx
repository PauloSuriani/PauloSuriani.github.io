import React from 'react';

class Header extends React.Component {
  render() {
    return (
    <>
      <h1 className='pt-3 text-3xl'>Keep in touch</h1>
      <div className='py-3'>
        <a className='hover:text-lime-600 pr-2 text-2xl font-serif text-lime-300' href={'https://github.com/PauloSuriani'}>GitHub</a>
        <span className='pr-2 font-serif'>|</span>
        <a className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://www.linkedin.com/in/paulo-vitor-moura-suriani-529683221/'}>LinkedIn</a>
        <span className='pr-2 font-serif'>|</span>
        <a className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://www.instagram.com/paulosuriani/'}>Instagram</a>
        <span className='pr-2 font-serif'>|</span>
        <a className='text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://github.com/PauloSuriani'}>Currículo</a>
      </div>
    </>
    );
  }
}

export default Header;