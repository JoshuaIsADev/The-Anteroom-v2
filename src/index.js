//1) import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//2) Get a reference to the div with ID root
const el = document.getElementById('root');

//3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
<React.StrictMode>
  <App />
</React.StrictMode>;

//4) Create a component in another file, export then import

//5) Show component on the screen
root.render(<App />);
