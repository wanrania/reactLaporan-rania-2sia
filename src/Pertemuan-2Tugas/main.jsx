import { createRoot } from "react-dom/client";
import Container from "./Container";
import './custom.css';
import Biodata from "./Biodata";

createRoot(document.getElementById("root")).render(
  <div className="card">
    <Container>
      <Biodata />
    </Container>
  </div>,
);
