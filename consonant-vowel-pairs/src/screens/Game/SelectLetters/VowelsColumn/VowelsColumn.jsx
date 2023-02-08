import { useContext } from "react";
import { GameParamtersContext } from "../../../../App";
import vowels from "../defaults/vowels";
import { selectedLetterStyle } from "../SelectLetters";

function VowelsColumn() {
  const { vowels: selectedVowels, setVowels } =
    useContext(GameParamtersContext);

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
    <div className="column">
      <h3>Vowels</h3>
      {vowels.map((vowel) => (
        <div
          className="button"
          key={vowel}
          style={
            selectedVowels.find((vow) => vow === vowel)
              ? selectedLetterStyle
              : {}
          }
          onClick={toggleVowel(vowel)}
        >
          <span className="buttonLetter">{vowel}</span>
        </div>
      ))}
    </div>
  );
}

export default VowelsColumn;
