import React from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const FloatingDiv = ({image, text1 , text2}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv" style={{ background : darkMode? 'black': '',border : darkMode? '3px solid white': '', color : darkMode? 'black': ''  }}>
        <img src={image} alt="" />
        <span style={{ color : darkMode? 'white': ''  }}>
            {text1} <br />
            {text2}
        </span>
    </div>
    
    );
}

export default FloatingDiv;
