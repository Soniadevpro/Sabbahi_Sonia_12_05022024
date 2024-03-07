// Importations nécessaires
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

// Sélection de l'élément racine
const root = document.getElementById("root");

if (root !== null) {
  // Créez la racine en utilisant la nouvelle API React 18+
  const reactRoot = createRoot(root);

  // Rendre votre application
  reactRoot.render(<App />);
} else {
  console.error("Failed to find the root element");
}
