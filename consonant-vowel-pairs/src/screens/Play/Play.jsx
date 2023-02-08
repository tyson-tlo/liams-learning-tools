import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameParamtersContext } from "../../App";
import letterColors from "./letterColors";
import NextPair from "./NextPair/NextPair";
import { sample } from "lodash";
import "./Play.css";

function Play() {
  const navigate = useNavigate();
  const [selectedConsonant, setSelectedConsonant] = useState("");
  const [selectedVowel, setSelectedVowel] = useState("");
  const { consonants, vowels } = useContext(GameParamtersContext);

  useEffect(() => {
    if (consonants.length === 0 || vowels.length === 0) {
      navigate("/");
    }
    createNewPair();
  }, []);

  const createNewPair = () => {
    const randomConsonant = sample(consonants);
    const randomConsonantColor = sample(letterColors);
    const randomVowel = sample(vowels);
    const randomVowelColor = sample(letterColors);

    setSelectedConsonant({
      letter: randomConsonant,
      color: randomConsonantColor,
    });
    setSelectedVowel({ letter: randomVowel, color: randomVowelColor });
  };

  return (
    <div className="Play">
      <div className="change-letters" onClick={() => navigate("/")}>
        Change Letters
      </div>
      <h1>
        <span style={{ color: selectedConsonant.color }}>
          {selectedConsonant.letter}
        </span>
        <span style={{ color: selectedVowel.color }}>
          {selectedVowel.letter}
        </span>
      </h1>
      <NextPair onClick={() => createNewPair()} />
    </div>
  );
}

export default Play;
