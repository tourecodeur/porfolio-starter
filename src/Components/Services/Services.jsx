import React from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './Resume.pdf'
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
const Services = () => {
  const transition = {duration: 1,type:'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/*left side*/}
      <div className="awesome">
        <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>Mes Talents</span>
        <span>services</span>
        <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Lorem ipsum dolor sit amet consectetur.
        </span>
        <a href={Resume} download>
            <button className="button s-button">
                Télécharger Mon CV
            </button>
        </a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/*left side*/}
      <div className="cards">
        <motion.div
        initial={{left:'25rem'}}
        whileInView={{left:'17rem'}}
        transition={transition}        
        
        style={{left:'16rem'}}>
        <Card
         emoji={HeartEmoji}
         heading={'Design'}
         detail={"Figma, Sketch, Photoshop, Illustrator, Adobe XD.."} 
         style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}/>
        </motion.div>
      </div>
      {/*second card*/}
      <div className="cards">
        <motion.div
        initial={{left:'10rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}        
        style={{left:'-2rem', top:'12rem'}}>
        <Card
         emoji={Glasses}
         heading={'Developpeur'}
         detail={"HTML, CSS, JAVASCRIPT, REACT, LARAVEL, BOOTSTRAP .."}
         style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}/>
        </motion.div>
        
      </div>
        {/*3rd card*/}
      <div className="cards">
        <motion.div
        initial={{left:'8rem'}}
        whileInView={{left:'20rem'}}
        transition={transition}
        style={{left:'25rem', top:'19rem'}}>
        <Card
         emoji={Humble}
         heading={'Ui/Ux Design'}
         detail={"Des design de maquette de site web professionnel et de qualité."}
         style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}
         />
       </motion.div>
      </div>
      <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>      
    </div>
  );
}

export default Services;
