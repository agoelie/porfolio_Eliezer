import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
// import php from  "../assets/img/php-svgrepo-com (1).svg"  
// frontend
// import css from "../assets/img/css-3svgrepo-com.svg";
// import html from "../assets/img/html-5-svgrepo-com.svg";
// import tailwind from "../assets/img/tailwind-svgrepo-com.svg";
// import figma from "../assets/img/figma-svgrepo-com.svg";

// import php from "../assets/img/php-svgrepo-com (1).svg";
// import laravel from "../assets/img/laravel-svgrepo-com.svg";
// import js from "../assets/img/js-svgrepo-com.svg";
// import vue from "../assets/img/vue-9-logo-svgrepo-com.svg";
// import python from "../assets/img/python-svgrepo-com.svg";
// import flask from "../assets/img/flask-svgrepo-com.svg";
// import react  from "../assets/img/react-svgrepo-com.svg";
// import nestjs from "../assets/img/nestjs-svgrepo-com.svg";
// import nextjs from "../assets/img/nextjs-icon-svgrepo-com.svg";


// import sql from "../assets/img/sql-svgrepo-com.svg";
// import mongo from "../assets/mongo-svgrepo-com.svg";

// import postman from "../assets/img/postman-icon-svgrepo-com.svg"

// const technologie =[
// {name:'css3', category:'frontend',icon:css},
// {name:'HTML5', category:'frontend',icon:html},
// {name:'tailwind', category:'frontend',icon:tailwind},
// {name:'figma', category:'frontend',icon:figma},
// {name:'figma', category:'frontend',icon:figma},

// {name:'php', category:'backend',icon:php},
// {name:'laravel', category:'backend',icon:laravel},
// {name:'js', category:'backend',icon:js},
// {name:'vue', category:'backend',icon:vue},
// {name:'python', category:'backend',icon:python},
// {name:'flask', category:'backend',icon:flask},
// {name:'react', category:'backend',icon:react},
// {name:'nestjs', category:'backend',icon:nestjs},
// {name:'nextjs', category:'backend',icon:nextjs},

// {name:'sql', category:'frontend',icon:sql},
// {name:'mongo', category:'frontend',icon:mongo},
// {name:'postman', category:'frontend',icon:postman},


// ]

// import React from "react";

// export const Technologies = () => {
//   const technologie = [
//     { name: 'css3', category: 'frontend', icon: css },
//     { name: 'HTML5', category: 'frontend', icon: html },
//     { name: 'tailwind', category: 'frontend', icon: tailwind },
//     { name: 'figma', category: 'frontend', icon: figma },
//     { name: 'php', category: 'backend', icon: php },
//     { name: 'laravel', category: 'backend', icon: laravel },
//     { name: 'js', category: 'backend', icon: js },
//     { name: 'vue', category: 'backend', icon: vue },
//     { name: 'python', category: 'backend', icon: python },
//     { name: 'flask', category: 'backend', icon: flask },
//     { name: 'react', category: 'backend', icon: react },
//     { name: 'nestjs', category: 'backend', icon: nestjs },
//     { name: 'nextjs', category: 'backend', icon: nextjs },
//     { name: 'sql', category: 'base de donnee', icon: sql },
//     { name: 'mongo', category: 'frontend', icon: mongo },
//     { name: 'postman', category: 'frontend', icon: postman }
//   ];

//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//       {technologie.map((tech, index) => (
//         <div key={index} className="flex flex-col items-center">
//           <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
//           <span className="text-lg font-semibold">{tech.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };


// import { Technologies } from './Technologies';

// function App() {
//   return (
//     <div className="App">
//       <Technologies />
//     </div>
//   );
// }

// export default App;




export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      
        <img className="background-image-left" src={colorSharp} alt="Image" />

{/* 
        <div className="h-10 w-20">
      <img src={php} alt="php"/>
    </div> */}
    </section>
    
  )
}
