import { useContext } from "react";
import { GameParamtersContext } from "../../../App";
import consonants from "./defaults/consonants";
import vowels from "./defaults/vowels";
import PlayGameButton from "./PlayGameButton/PlayGameButton";
import "./SelectLetters.css";

function SelectLetters() {
  const {
    vowels: selectedVowels,
    setVowels,
    consonants: selectedConsonants,
    setConsonants,
  } = useContext(GameParamtersContext);

  const toggleConsonant = (consonant) => {
    return () => {
      if (selectedConsonants.find((con) => con === consonant)) {
        setConsonants((prev) => prev.filter((con) => con !== consonant));
      } else {
        setConsonants((prev) => [...prev, consonant]);
      }
    };
  };

  const toggleVowel = (vowel) => {
    return () => {
      if (selectedVowels.find((vow) => vow === vowel)) {
        setVowels((prev) => prev.filter((vow) => vow !== vowel));
      } else {
        setVowels((prev) => [...prev, vowel]);
      }
    };
  };

  return (
    <div>
      <div
        className="SelectLetters"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          <h3>Consonants</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {consonants.slice(0, consonants.length / 2).map((consonant) => (
                <button
                  style={
                    selectedConsonants.find((con) => con === consonant)
                      ? { backgroundColor: "blue", color: "white" }
                      : {}
                  }
                  key={consonant}
                  onClick={toggleConsonant(consonant)}
                >
                  {consonant}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {consonants
                .slice(consonants.length / 2, consonants.length)
                .map((consonant) => (
                  <button
                    style={
                      selectedConsonants.find((con) => con === consonant)
                        ? { backgroundColor: "blue", color: "white" }
                        : {}
                    }
                    key={consonant}
                    onClick={toggleConsonant(consonant)}
                  >
                    {consonant}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className="column">
          <h3>Vowels</h3>
          {vowels.map((vowel) => (
            <button
              key={vowel}
              style={
                selectedVowels.find((vow) => vow === vowel)
                  ? { backgroundColor: "blue", color: "white" }
                  : {}
              }
              onClick={toggleVowel(vowel)}
            >
              {vowel}
            </button>
          ))}
        </div>
      </div>
      {selectedConsonants.length > 0 && selectedVowels.length > 0 && (
        <PlayGameButton />
      )}
    </div>
  );
}

export default SelectLetters;