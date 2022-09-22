import React from 'react';
import MyLanguages from './MyLanguages';

class MiniBio extends React.Component {
  constructor(){
    super();
    this.state = {
      longText: "hidden",
      dots: "display:flex",
      buttonText: "Read more...",
    };
  }

  expandText = () => {
    console.log('fjaçldjfaçlkdj');
    this.setState({ longText: "hidden"});
  }

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
      Fast forward to 2021, I went hard into web development,
      learning Front End and Back End stacks through more than 30
      projects that I have coded for learning sake: From fundamentals
      HTML & CSS to JavaScript React, including tests and CRUD 
      using Node.js + Express. I'm also into Agile Methodologies and
      teamwork cooperations.  `

    const curiosity =  `
      Some random curiosities about me: I like music and already 
      played in a rock band. 
      I'm also on gardening as a way to do concrete things 
      away from a computer screen. Let's talk about world history or 
      3D printing cool projects and possibilities?
    `
    const { dots, longText, buttonText } = this.state;
    return (
    <div className="">
      <div className=''>
        <h2 className='text-lime-300 lg:text-[36px] md:text-[33px] sm:text-[30px] text-[27px] sm:py-6 py-3'>
          Web Development
        </h2>
      </div>
      <hr className='opacity-60 py-2' />
      <p className='leading-normal pt-3 sm:py-5 text-[23px] font-serif'>
        Yo! Hey there, my name is Paulo, I'm a 
        fullstack web developer. I'm oriented to simple and creative
        solutions. Tested, scalable and documented applications as well.
        I was introduced to Computer Science at 20
        <span className={dots}>...</span>
        <span id="more" className={longText}>
        06, on Federal University of Uberlândia, it helped me to 
        built a base in logics, maths, algorithyms, recursiveness and 
        computing fundamentals. 
        </span>
      </p>


      {/* <p className='leading-normal py-3 text-[23px] font-serif'>{intro}</p> */}
      <p className={`leading-normal py-3 text-[23px] font-serif ${longText}`}>{presentation1}</p>
      <p className={`leading-normal py-3 text-[23px] font-serif ${longText}`}>{curiosity}</p>
      

      <button 
      className='opacity-60 py-2 container'
      enabled="true"
        type="button" 
        onClick={ () => {
          if (longText === 'display:flex') {
            this.setState({ dots: "display:flex", longText: "hidden", buttonText: "Read more..."})
          }
          else this.setState({ dots: "hidden", longText: "display:flex", buttonText: "Read less..."});
        } }
      >
        { buttonText }
      </button>

      <p className='pt-5 sm:py-7 lg:text-5xl md:text-4xl text-3xl'>
        {`Languages & tools`}
      </p> 
      <MyLanguages />
      
    </div>
    );
  }
}

export default MiniBio;