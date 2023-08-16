import React from 'react';
import './Scroll.css';

const Scroll = ({children}) => {
    return (
        <div className="pa2" style={{
            overflowY: "scroll",
            border: "5px solid black",
            boxShadow: "inset 0 0 10px #000",
            height: "60vh"
        }}>
            {children}
        </div>
    );
}
export default Scroll;
