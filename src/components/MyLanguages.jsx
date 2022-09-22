import React from 'react';

class MyLanguages extends React.Component {
  render() {
    return (
    <div className='flex flex-wrap'>

      <div className=''>
        <h2 className='font-light font-serif text-2xl py-6'>Front End</h2>
        <ul className='flex pb-2 flex-wrap sm:w-60 font-medium text-lg'>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>HTML</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>CSS</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Tailwind</li>
          <li className='bg-lime-900 cursor-default px-2 m-1 hover:bg-green-800'>JavaScript</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>React</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Axios</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Hooks</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Jest</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>GitHub</li>
        </ul>
      </div>

      <div className=''>
        <h2 className='font-light font-serif text-2xl py-6'>Back End</h2>
        <ul className='flex pb-2 flex-wrap sm:w-64 font-medium text-lg'>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>NodeJs</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Docker</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Heroku</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>ExpressJs</li>
          <li className='bg-lime-900 cursor-default px-2 m-1 hover:bg-green-800'>TypeScript</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Docker Compose</li>
          <li className='bg-lime-700 cursor-default px-2 m-1 hover:bg-green-600'>Postman</li>
        </ul>
      </div>

      <div className='md:pl-2'>
        <h2 className='font-light font-serif text-2xl py-6'>Data Base +</h2>
        <ul className='flex pb-2 flex-wrap sm:w-64 font-medium text-lg'>
          <li className='bg-lime-900 cursor-default px-2 m-1  hover:bg-green-800'>SQL</li>
          <li className='bg-lime-700 cursor-default px-2 m-1  hover:bg-green-600'>MySQL</li>
          <li className='bg-lime-700 cursor-default px-2 m-1  hover:bg-green-600'>MongoDB</li> 
          <li className='bg-lime-700 cursor-default px-2 m-1  hover:bg-green-600'>Mongoose</li>
          <li className='bg-lime-700 cursor-default px-2 m-1  hover:bg-green-600'>Sequelize</li>
          <li className='bg-lime-900 cursor-default px-2 m-1  hover:bg-green-800'>Python</li>
          <li className='bg-lime-800 cursor-default px-2 m-1  hover:bg-green-900'>C</li>
          <li className='bg-lime-800 cursor-default px-2 m-1  hover:bg-green-900'>Java</li>
          <li className='bg-lime-800 cursor-default px-2 m-1  hover:bg-green-900'>Prolog</li>
          <li className='bg-lime-800 cursor-default px-2 m-1  hover:bg-green-900'>Haskell</li>
        </ul>
      </div>

    </div>
    );
  }
}

export default MyLanguages;