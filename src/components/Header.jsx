import React from 'react';
// import avatar from '../IMG_20210428_185440_243.png'
class Header extends React.Component {
  render() {
    return (
      <header className='flex container max-w-screen-md'>
        {/* <img className="w-20 rounded-full" src={avatar} alt="Bordered avatar"/> */}
        <div>
          <h1 className='pt-3 lg:text-5xl md:text-4xl text-3xl'>Keep in touch</h1>
          <div className='py-3'>
            <a className='hover:text-lime-600 pr-2 text-2xl font-serif text-lime-300' href={'https://github.com/PauloSuriani'}>GitHub</a>
            <span className='pr-2 font-serif'>|</span>
            <a className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://www.linkedin.com/in/paulo-vitor-moura-suriani-529683221/'}>LinkedIn</a>
            <span className='pr-2 font-serif'>|</span>
            <a className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://www.instagram.com/paulosuriani/'}>Instagram</a>
            <span className='pr-2 font-serif'>|</span>
            <a className='text-2xl font-serif text-lime-300 hover:text-lime-600' href={'https://github.com/PauloSuriani'}>Currículo</a>
          </div>
        </div>
    </header>
    );
  }
}

export default Header;