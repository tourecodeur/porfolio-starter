import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle" style={{ background : darkMode? 'white': '', color : darkMode? 'black': ''  }}>8+</div>
            <span>Années</span>
            <span>D'experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ background : darkMode? 'white': '', color : darkMode? 'black': ''  }}>20+</div>
            <span>Projets</span>
            <span>Completes</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ background : darkMode? 'white': '', color : darkMode? 'black': ''  }}>2+</div>
            <span>Compagnies</span>
            <span>Fréquentés</span>
        </div>
      
    </div>
  );
}
export default Experience;
