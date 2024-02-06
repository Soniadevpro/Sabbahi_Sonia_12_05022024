import React from "react";
import { createRoot, Root } from "react-dom/client"; // Importation modifiée avec type pour createRoot
import App from "./App";
import "./index.scss";

const root = document.getElementById("root") as HTMLElement;

// Créez la racine en utilisant la nouvelle API
const reactRoot: Root = createRoot(root);

// Rendre votre application
reactRoot.render(<App />);
