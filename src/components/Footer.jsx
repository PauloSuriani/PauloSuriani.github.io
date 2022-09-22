import React from 'react';
import avatar from '../IMG_20210428_185440_243.png'
class Footer extends React.Component {
  render() {
    return (
    <footer className='container max-w-screen-md'>
      <hr className='opacity-60 pt-2'/>
      <div className='flex justify-between items-center'>
      <span className='sm:text-gray-500 text-gray-100 font-bold font-mono sm:text-3xl text-md'>
        surianipaulo@gmail.com
      </span>
      <div className='flex items-center'>
      <span className='pr-2 text-lime-500 font-mono sm:opacity-100 sm:text-lg text-sm opacity-60'>Thanks for visiting!</span>
        <img className="sm:w-20 w-14 rounded-full" src={avatar} alt="Bordered avatar"/>
        </div>

      </div>
      
    </footer>
    );
  }
}

export default Footer;