import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="/mint" exact component={ Minting } /> */}
      </Routes>
    </Router>
  );
}

export default App;
