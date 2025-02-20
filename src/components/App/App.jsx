import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Home from '../Home/Home.jsx'
import NavBar from '../NavBar/NavBar.jsx'

import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/studentform">Student Form</Link>
                </li>
                <li>
                <Link to="/studentlist">Student List</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
  

        </div>

        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                <NavBar />
                {/* Nice spot for a nav, eh? */}
                <Route path="/" exact>
                    <Home />
                </Route>
            </header>
            <StudentForm />
            <StudentList />
        </div>
        </Router>
    );
}


export default App;
