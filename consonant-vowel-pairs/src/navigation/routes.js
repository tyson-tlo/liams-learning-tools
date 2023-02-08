import { createBrowserRouter } from "react-router-dom";
import Game from "../screens/Game/Game";
import Play from "../screens/Play/Play";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/game",
    element: <Play />,
  },
]);

export default routes;
