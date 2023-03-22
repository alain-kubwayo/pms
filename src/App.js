import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Wrapper from './layout/Wrapper';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
        <Route path="/" element={<div className="text-red-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eius sequi accusantium doloribus laborum fuga placeat maiores, vel, illum, blanditiis eos voluptate rerum quia! Doloremque at explicabo facere laborum. Reiciendis.</div>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

