import React from 'react';
class Header extends React.Component {
  render() {
    return (
      <header className='flex container max-w-screen-md'>
        <div>
          <h1 className='pt-8 lg:text-5xl md:text-4xl text-3xl'>
            Keep in touch
          </h1>
          <div className='py-3'>
            <a 
              className='hover:text-lime-600 pr-2 text-2xl font-serif text-lime-300' 
              href={'404'}
            >
              Contact
            </a>
            <span className='pr-2 font-serif'>|</span>
            <a 
              className='hover:text-lime-600 pr-2 text-2xl font-serif text-lime-300' 
              href={'https://github.com/PauloSuriani'}
            >
              GitHub
            </a>
            <span className='pr-2 font-serif'>|</span>
            <a 
              className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' 
              href={'https://www.linkedin.com/in/paulo-vitor-moura-suriani-529683221/'}
            >
              In
            </a>
            <span className='pr-2 font-serif'>|</span>
            <a 
              className='pr-2 text-2xl font-serif text-lime-300 hover:text-lime-600' 
              href={'https://www.instagram.com/paulosuriani/'}
              >
                Social
              </a>
            <span className='pr-2 font-serif'>|</span>
            <a 
              className='text-2xl font-serif text-lime-300 hover:text-lime-600' 
              href={'https://github.com/PauloSuriani'}
            >
              Certifications
            </a>
          </div>
        </div>
    </header>
    );
  }
}

export default Header;