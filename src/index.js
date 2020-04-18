import React from 'react';
import ReactDOM from 'react-dom';

import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';


ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={(coords) => console.log(coords)} />
    <DelayedButton onDelayedClick={console.log()} delay={1500} />
  </div>,
  document.getElementById('global')
);
