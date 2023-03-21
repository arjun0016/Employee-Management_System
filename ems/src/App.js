import './App.css';
import './bootstrap.min.css';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
