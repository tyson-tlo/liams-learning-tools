import ConsonantsColumn from "./ConsonantsColumn/ConsonantsColumn";
import PlayGameButton from "./PlayGameButton/PlayGameButton";
import VowelsColumn from "./VowelsColumn/VowelsColumn";
import "./SelectLetters.css";

export const selectedLetterStyle = {
  backgroundColor: "blue",
  color: "white",
};

function SelectLetters() {
  return (
    <div>
      <div
        className="SelectLetters"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <ConsonantsColumn />
        <VowelsColumn />
      </div>
      <PlayGameButton />
    </div>
  );
}

export default SelectLetters;
