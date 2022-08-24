import React from 'react';
import MyLanguages from './MyLanguages';

class MiniBio extends React.Component {

  render() {
    const intro = `
      Yo! Hey there, my name is Paulo, I'm a 
      fullstack web developer. I'm oriented to simple and creative
      solutions. Tested, scalable and documented aplications as well.
    `
    const presentation1 = `
      Fast forward to 2021, I went hardcore into web development,
      learning front and backend stacks, and I've got prepared
      with Agile methodologies and Soft Skills.  
      `
      const presentation2 = `
      I was introduced to Computer Science at
      2006, on Federal University of Uberlândia and although I didn't 
      have a bachelors degree, it helped me to built a base in 
      logics, maths, algorithyms, recursiveness and computing fundamentals. 
      `
      const presentation3 = ` Yo, I'm Paulo, curiosity about how 
      things works lead me into technology. I'm also on music, 
      gardening, reading, creative activities.

      Hello world! My name is Paulo, 
      borned at '88 and since then I've always been curious about 
      computers.  
      
      Traveled into algorithym and
      recursiveness. 

      Although my first experience with a computer was typing 
      on a MS-DOS terminal, and I was officaly introduced to Computer Science at
      2006, through logics, maths. Last year I've been practicing and learning 
      about web development. I've done about 40 projects in a journey including 
      technologies like: HTML, CSS, JavaScript, React, Docker, SQL, NodeJs,
      TypeScript, 

      tools like React to create web pages and 
      cook with Node.js + Express to build robust back-ends.
      It's simple like that. Clean code. 

      `

      const curiosity =  `
        Some curiosities about me: I like music and already played in a rock band. 
        I'm also on gardening as a way to do concrete things 
        away from a computer screen. Interest in world history and 
        3D printer creative projects and possibilities.
      `
    return (
    <div className="">
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
      {/*diminuir a distancia py depoissssssssssssss!!!! */ }
      <p className='leading-relaxed py-5 text-xl font-serif text-start'>{intro}</p>
      <p className='leading-relaxed py-5 text-xl font-serif text-start'>{presentation2}</p>
      <p className='leading-relaxed py-5 text-xl font-serif text-start'>{presentation1}</p>
      <p className='leading-relaxed py-5 text-xl font-serif text-start'>{curiosity}</p>
      <p className='py-3 text-2xl'>Curious?</p>
      <a  className='font-serif text-lime-300' href={'https://github.com/PauloSuriani'}>See done, running projects as how they are!</a>
      <span className='font-serif px-2' >|</span>
      <a className='text-lime-300 font-serif' href={'https://github.com/PauloSuriani'}>Show me the code!</a>
      <p className='py-5 text-2xl'>{`Languages & tools in my map`}</p>
      <MyLanguages />
      {/* <hr /> */}
    </div>
    );
  }
}

export default MiniBio;