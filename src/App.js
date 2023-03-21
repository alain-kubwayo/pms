import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

