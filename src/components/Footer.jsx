import React from 'react';
import avatar from '../IMG_20210428_185440_243.png'
class Footer extends React.Component {
  render() {
    return (
    <footer className='container max-w-screen-md'>
      <hr className='opacity-60 pt-2'/>
      <div className='flex justify-between items-center'>
      <span className='text-gray-400'>Uberlândia, MG, Brasil 2022</span>
      <div className='flex items-center'>
      <span className='pr-2 text-lime-400'>Thanks for visiting!</span>
        <img className="w-14 rounded-full" src={avatar} alt="Bordered avatar"/>
        </div>

      </div>
      
    </footer>
    );
  }
}

export default Footer;