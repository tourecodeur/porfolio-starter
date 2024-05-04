import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
const Intro = () => {
    const transition = {duration: 2, type:'spring' } 
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ background : darkMode? 'black': '', color : darkMode? 'white': ''  }}>Salut! Je suis</span>
                    <span> Macoumba Touré</span>
                    <span>un developpeur Front-End, Designer et Social Manager
                          en producction de qualité.
                    </span>
                </div>
                <button className="button i-button">Engager Moi</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                
                <motion.img
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={Glassesimoji} alt="" />
                
                <motion.div
                initial={{left:'-74%',top:'-4%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:'-4%', left:'68%'}}
                className='floating-div'>
                    <FloatingDiv image={Crown} text1='Web' text2='Developpeur'/>
                </motion.div>

                <motion.div
                initial={{left:'9rem',top:'16rem'}}
                whileInView={{left:'2rem'}}
                transition={transition}
                style={{top:'16rem', left:'2rem'}}
                className='floating-div'>
                    <FloatingDiv image={Thumbup} text1='Meilleur' text2='Designer'/>
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
                <div className="blur"
                 style={
                    {
                        background:'#C1F5FF',
                        top:'17rem',
                        width:'21rem',
                        height:'11rem',
                        left:'-9rem'
                        }
                    }>
                </div>
            </div>
        </div>
    )
}
export default Intro