import { React, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import HomePage from './components/HomePage';
import ListAllBooks from './components/library/ListAllBooks';
import Librarians from './components/library/Librarians';
import BooksIssuedByLibrarian from './components/library/BooksIssuedByLibrarian';
import SearchBook from './components/book/SearchBook';
import AddBook from './components/book/AddBook';
import AddAuthor from './components/book/AddAuthor';
import AuthorBooks from './components/book/AuthorBooks';
import StudentLoansByID from './components/student/StudentLoansByID';
import AddStudent from './components/student/AddStudent';
import TakeBook from './components/bookloans/TakeBook';
import BookLoanTrasactions from './components/bookloans/BookLoanTrasactions';

//------------- class component --------------------
class App extends Component {

  render() {
    return (
      <>
        <div className='App'>
          <Router>
          <div>
            <Header/>
          </div>
          <div>
            <div className='content row'>
              <div className='col-2 sectionOne' style={{ backgroundColor: '#005A9C' }}>
                <SideMenu />
              </div>
              <div className='col-10 sectionTwo' style={{ backgroundColor: '#F0F0F0' }}>
                  <Routes>
                    <Route path='/' exact element={<HomePage/>}/>
                    <Route path='/dashboard' element={<DashBoard/>} />

                    {/* ---------librarian-------- */}
                    <Route path='/library/allbooks' element={<ListAllBooks/>}/>
                    <Route path='/library/librarian' element={<Librarians/>}/>
                    <Route path='/library/booksissued' element={<BooksIssuedByLibrarian/>}/>
                    
                    {/* ---------- Books ----------- */}
                    <Route path='/book/search' element={<SearchBook/>}/>
                    <Route path='/book' element={<AddBook/>}/>
                    
                    {/* ----------Author------------ */}
                    <Route path='/author' element={<AddAuthor/>}/>
                    <Route path='/author/search' element={<AuthorBooks/>}/>

                    {/* ----------Student------------ */}
                    <Route path='/student' element={<AddStudent/>}/>
                    <Route path='/student/search' element={<StudentLoansByID/>}/>

                    {/* ---------- Book loans ---------- */}
                    <Route path='/bookloan' element={<TakeBook/>}/>
                    <Route path='/bookloan/all' element={<BookLoanTrasactions/>}/>

                  </Routes>
              </div>
            </div>
          </div>
          </Router>
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