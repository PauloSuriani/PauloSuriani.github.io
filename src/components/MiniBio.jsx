import React from 'react';
import MyLanguages from './MyLanguages';

class MiniBio extends React.Component {

  render() {
    const intro = `
      Yo! Hey there, my name is Paulo, I'm a 
      fullstack web developer. I'm oriented to simple and creative
      solutions. Tested, scalable and documented applications as well.
      I was introduced to Computer Science at
      2006, on Federal University of Uberlândia, it helped me to 
      built a base in logics, maths, algorithyms, recursiveness and 
      computing fundamentals. 
    `
    const presentation1 = `
      Fast forward to 2021, I went hardcore into web development,
      learning Front End and Back End stacks through more than 40
      projects that I have coded for learning sake: From fundamentals
      HTML & CSS to JavaScript React, including tests and CRUD 
      using Node.js + Express. I'm also into Agile methodologies and improved my Soft Skills
      with other mates in this journey.  
      `
      const presentation2 = `
      
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

      and although I didn't 
      have a bachelors degree

      `

      const curiosity =  `
        Some random curiosities about me: I like music and already 
        played in a rock band. 
        I'm also on gardening as a way to do concrete things 
        away from a computer screen. Let's talk about world history or 
        3D printing cool projects and possibilities?
      `
    return (
    <div className="">
        {/* <h1 className="text-2xl font-bold underline">
      Hello world!
    </h1> */}
      <div className=''>
        <h2 className='text-lime-300 lg:text-[36px] md:text-[33px] sm:text-[30px] text-[27px] sm:py-6 py-3'>
          Web Development
        </h2>
        {/* <h2 className='text-lime-300 text-2xl pt-2'>Web development focused on</h2> */}
        {/* <h3 className='text-lime-300 text-2xl'>transform ideas into solutions</h3> */}
        {/* <p className='text-lime-300 pb-2 text-2xl text-right'>{`...through code { }`}</p> */}
      </div>
      <hr className='opacity-60 py-2' />
      {/*diminuir a distancia py depoissssssssssssss!!!! */ }
      <p className='leading-normal py-3 text-[23px] font-serif'>{intro}</p>
      {/* <p className='leading-relaxed py-3 text-xl font-serif text-start'>{presentation2}</p> */}
      <p className='leading-normal py-3 text-[23px] font-serif'>{presentation1}</p>
      <p className='leading-normal py-3 text-[23px] font-serif'>{curiosity}</p>
      {/* <p className='py-3 text-2xl'>Curious?</p>
      <a  className='font-serif text-lime-300' href={'https://github.com/PauloSuriani'}>See done, running projects as how they are!</a>
      <span className='font-serif px-2' >|</span>
      <a className='text-lime-300 font-serif' href={'https://github.com/PauloSuriani'}>Show me the code!</a>*/}
      <p className='py-5 lg:text-5xl md:text-4xl text-3xl'>
        {`Languages & tools`}
      </p> 
      <MyLanguages />
      
    </div>
    );
  }
}

export default MiniBio;