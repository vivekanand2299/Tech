import React from 'react';
import { Mafs, Coordinates } from 'mafs';
import 'mafs/core.css';
import MovableCircle from './MovableCircle';
function HelloFx() {
  return (
    <Mafs>
      <Coordinates.Cartesian />
      <MovableCircle />
    </Mafs>
  );
}

export default HelloFx;
