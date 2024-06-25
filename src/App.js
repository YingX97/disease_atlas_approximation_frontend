import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
