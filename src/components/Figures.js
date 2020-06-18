import React from 'react';
import { Figure, FigureImage } from 'react-bootstrap';
import './Figures.css';


function Fig(props) {
  const { width, height, image, caption } = props
  return (

    <div>
      <Figure>
        <img
          width={width}
          height={height}
          alt="171x180"
          src={`${process.env.PUBLIC_URL}images/${image}`}
        />
        <Figure.Caption >
          {caption}
        </Figure.Caption>
      </Figure>
    </div>

  );
}

export default Fig;