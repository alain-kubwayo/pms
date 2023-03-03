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
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

