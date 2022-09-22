import React from 'react';
import avatar from '../IMG_20210428_185440_243.png'
class Footer extends React.Component {
  render() {
    return (
    <footer className='container max-w-screen-md'>
      <hr className='opacity-60 pt-2 sm:pt-4'/>
      <div className='flex justify-between items-center'>
      <span className='cursor-default hover:text-white sm:text-gray-500 text-gray-100 font-bold font-mono sm:text-3xl text-md'>
        surianipaulo@gmail.com
      </span>
      <div className='flex items-center'>
      <span className='hover:text-lime-300 cursor-default pr-2 flex text-lime-500 font-mono sm:opacity-100 sm:text-lg text-sm opacity-60'>
        Thanks
        <span className='hover:text-lime-300 pl-2 text-lime-500 font-mono sm:opacity-100 sm:text-lg sm:inline hidden text-xs opacity-60'>
          for visiting
        </span>
        <span className='hover:text-lime-300  flex text-lime-500 font-mono sm:opacity-100 sm:text-lg text-sm opacity-60'>
          !
        </span>
      </span>
      
      {/* <span className='pr-2 text-lime-500 font-mono sm:opacity-100 sm:text-lg text-xs opacity-60'>!</span> */}

        <img className="sm:w-16 w-10 rounded-full" src={avatar} alt="Bordered avatar"/>
        </div>

      </div>
      
    </footer>
    );
  }
}

export default Footer;