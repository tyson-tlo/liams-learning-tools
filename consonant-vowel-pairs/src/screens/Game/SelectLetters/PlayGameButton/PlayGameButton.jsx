import { useNavigate } from "react-router-dom";
import "./PlayGameButton.css";

function PlayGameButton() {
  const navigate = useNavigate();

  return (
    <div className="PlayGameButton">
      <button onClick={() => navigate("/game")}>Play Game</button>
    </div>
  );
}

export default PlayGameButton;
