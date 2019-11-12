import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare interface globals {
  document: any;
};

ReactDOM.render(<App />, document.getElementById('root'));
