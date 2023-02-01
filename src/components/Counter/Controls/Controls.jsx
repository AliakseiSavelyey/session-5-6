import React from 'react';
import './Controls.scss';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter-controls">
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
