import { React, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

//------------- class component --------------------
class App extends Component {

  render() {
    return (
      <>
        <div className='App'>
          <div>
            <Header/>
          </div>
          <div>
            <div className='content row'>
              <div className='col-2 sectionOne' style={{ backgroundColor: '#005A9C' }}>
                <SideMenu />
              </div>
              <div className='col-10 sectionTwo' style={{ backgroundColor: 'white' }}>
                <h1>Display</h1>
                <Router>
                  <Routes>
                    <Route path='/' element={<DashBoard />} />
                  </Routes>
                </Router>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;



// ------------ functional component -------------------
// function App() {
//   return (
//     <div className="App">
//           <h1>Library Management</h1>
//     </div>
//   );
// }


//react fragments
//In React, when you want to return multiple elements from a component, you have to wrap them in a single parent element. 
//This can lead to an unnecessary extra DOM node, which can impact the performance of your application.

//React fragments allow you to group a list of children without adding an extra DOM node. 
//This can help to keep your DOM structure cleaner and more efficient, especially when dealing with long lists of elements.