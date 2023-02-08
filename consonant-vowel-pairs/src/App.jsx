import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./navigation/routes";

export const GameParamtersContext = createContext();

function App() {
  const [consonants, setConsonants] = useState([]);
  const [vowels, setVowels] = useState([]);
  return (
    <div className="App">
      <GameParamtersContext.Provider
        value={{ consonants, vowels, setConsonants, setVowels }}
      >
        <RouterProvider router={router} />
      </GameParamtersContext.Provider>
    </div>
  );
}

export default App;
