import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Wrapper from './components/layout/Wrapper';

import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

