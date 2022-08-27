import React from 'react';
import avatar from '../IMG_20210428_185440_243.png'
class Footer extends React.Component {
  render() {
    return (
    <footer className='container max-w-screen-md'>
      <hr className='opacity-60 pt-2'/>
      <div className='flex justify-between items-center'>
      <span className='text-gray-400 font-bold font-serif sm:text-xl text-sm'>
        Uberlândia, Brazil
      </span>
      <div className='flex items-center'>
      <span className='pr-2 text-lime-400 font-bold font-serif sm:text-xl text-sm'>Thanks for visiting!</span>
        <img className="sm:w-16 w-10 rounded-full" src={avatar} alt="Bordered avatar"/>
        </div>

      </div>
      
    </footer>
    );
  }
}

export default Footer;