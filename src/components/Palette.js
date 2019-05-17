import React from 'react';
import './Palette.css';

const Color = (props) => {
  return (
    <div className="color">
      color
    </div>
  )
}

const Palette = ({colors, selected}) => {
  return (
    <div className="palette">
      <Color />
      <Color />
    </div>
  )
}

export default Palette;
