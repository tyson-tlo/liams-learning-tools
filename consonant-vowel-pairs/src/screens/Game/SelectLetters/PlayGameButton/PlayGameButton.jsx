import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameParamtersContext } from "../../../../App";
import "./PlayGameButton.css";

function PlayGameButton() {
  const [disabled, setDisabled] = useState(true);
  const { vowels, consonants } = useContext(GameParamtersContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (consonants.length > 0 && vowels.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [vowels, consonants]);

  return (
    <div className="PlayGameButton">
      <button
        className={disabled ? "disabled" : ""}
        onClick={() => navigate("/game")}
      >
        Play Game
      </button>
    </div>
  );
}

export default PlayGameButton;
