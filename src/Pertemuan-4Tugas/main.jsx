import { createRoot } from "react-dom/client";
import './tailwind.css';
import UniversityDirectory from "./UniversityDirectory";

createRoot(document.getElementById("root")).render(
  <div>
    <UniversityDirectory/>
  </div>,
);
