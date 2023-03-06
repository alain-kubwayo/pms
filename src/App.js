import { AuthProvider } from "./AuthContext";
import UseContextComponent from "./components/UseContextComponent";
import UseContextPractice from "./components/UseContextPractice";
import UseEffectComponent from "./components/UseEffectComponent";
import UseStateComponent from "./components/UseStateComponent";

import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div>
      <UseStateComponent />
      <UseEffectComponent />
      <ThemeProvider>
        <UseContextComponent />
      </ThemeProvider>
      <AuthProvider>
        <UseContextPractice />
      </AuthProvider>
    </div>
  );
}

export default App;
