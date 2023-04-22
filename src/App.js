import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Wrapper from "./components/layout/Wrapper";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Wrapper>
          <Routes>
              <Route path="/" element={<Welcome />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
