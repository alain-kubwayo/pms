import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Wrapper from './layout/Wrapper';
import Home from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

