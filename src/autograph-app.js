import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import AutographController from './autograph/autograph-controller.react';

ReactDOM.render(
    <AutographController />,
    document.getElementById('my-react-container')
);