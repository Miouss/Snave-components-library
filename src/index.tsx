import ReactDOM from "react-dom/client";
import { HomeFrame } from "./components/HomeFrame/HomeFrame";
import "./index.css";


export const NORMAL_PC = "@media (min-width: 1281px)";
export const SMALL_PC = "@media (min-width: 961px)";
export const TABLET = "@media (max-width: 960px)";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <HomeFrame />
);
