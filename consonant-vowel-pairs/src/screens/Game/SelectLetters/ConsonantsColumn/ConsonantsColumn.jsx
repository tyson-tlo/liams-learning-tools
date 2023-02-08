import { useContext } from "react";
import { GameParamtersContext } from "../../../../App";
import consonants from "../defaults/consonants";
import { selectedLetterStyle } from "../SelectLetters";

function ConsonantsColumn() {
  const { consonants: selectedConsonants, setConsonants } =
    useContext(GameParamtersContext);

  const toggleConsonant = (consonant) => {
    return () => {
      if (selectedConsonants.find((con) => con === consonant)) {
        setConsonants((prev) => prev.filter((con) => con !== consonant));
      } else {
        setConsonants((prev) => [...prev, consonant]);
      }
    };
  };

  return (
    <div className="column">
      <h3>Consonants</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
          }}
        >
          {consonants.slice(0, consonants.length / 2).map((consonant) => (
            <div
              className="button"
              style={
                selectedConsonants.find((con) => con === consonant)
                  ? selectedLetterStyle
                  : {}
              }
              key={consonant}
              onClick={toggleConsonant(consonant)}
            >
              <span className="buttonLetter">{consonant}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {consonants
            .slice(consonants.length / 2, consonants.length)
            .map((consonant) => (
              <div
                className="button"
                style={
                  selectedConsonants.find((con) => con === consonant)
                    ? selectedLetterStyle
                    : {}
                }
                key={consonant}
                onClick={toggleConsonant(consonant)}
              >
                <span className="buttonLetter">{consonant}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ConsonantsColumn;
