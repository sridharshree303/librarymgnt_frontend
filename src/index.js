import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
 
// React strict mode 
// React's StrictMode is sort of a helper component that will help you write better react components, 
// you can wrap a set of components with <StrictMode /> and it'll basically:
// React's StrictMode is sort of a helper component that will help you write better react components, 
// you can wrap a set of components with <StrictMode /> and it'll basically:
// Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
// As the documentation says, strict mode is development oriented so you don't need to worry about it impacting on your production build.
// I've found it especially useful to implement strict mode when I'm working on new code bases and I want to see what kind of code/components I'm facing. 
// Also if you're on bug hunting mode, sometimes it's a good idea to wrap with <StrictMode /> the components/blocks of code you think might be the source of the problem.

// reportWebVitals
// reportWebVitals are a set of useful metrics that aim to capture the user experience of a web page,