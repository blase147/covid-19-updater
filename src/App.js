import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import HomePage from './components/HomePage';
import Details from './components/Details';


function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
