import React from 'react';
import MyLanguages from './MyLanguages';

class MiniBio extends React.Component {

  render() {
    const presentation1 = `Hello world! My name is Paulo, 
      borned at '88 and since then I've always been curious about 
      computers. I was officaly introduced to Computer Science at
      2006, through logics, maths. 
      
      Traveled into algorithym and
      recursiveness. 
      `
      const presentation2 = `Hey there, my name is Paulo, fullstack
      web developer. I use tools like React to create web pages and 
      cook with Node.js + Express to build robust back-ends.   
      `
      const presentation3 = `It's simple like that. Clean code.
      `
    return (
    <>
        {/* <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1> */}
      <div className=''>
        <h2 className='text-lime-300 text-3xl py-5'>Web Development</h2>
        {/* <h2 className='text-lime-300 text-2xl pt-2'>Web development focused on</h2> */}
        {/* <h3 className='text-lime-300 text-2xl'>transform ideas into solutions</h3> */}
        {/* <p className='text-lime-300 pb-2 text-2xl text-right'>{`...through code { }`}</p> */}
      </div>
      <hr />
      <p className='py-5 text-xl font-serif text-start'>{presentation1}</p>
      <p className='py-5 text-xl font-serif text-start'>{presentation2}</p>
      <p className='py-3 text-2xl'>Curious?</p>
      <a  className='font-serif text-lime-300' href={'https://github.com/PauloSuriani'}>See done, running projects as how they are!</a>
      <span className='font-serif px-2' >|</span>
      <a className='text-lime-300 font-serif' href={'https://github.com/PauloSuriani'}>Show me the code!</a>
      <p className='py-5 text-2xl'>{`Languages & tools in my map`}</p>
      <MyLanguages />
      {/* <hr /> */}
    </>
    );
  }
}

export default MiniBio;