import { useState } from "react";

export default function GradientGenerator() {
  <h1>Generador de gradientes</h1>;
  const [colors, setColors] = useState([]);

  // Funcion que recibe el index y el color
  function handleColorChange(index, color) {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  }

  // Funcion que genera el gradiente
  function generateGradient() {
    const gradient = `linear-gradient(to right, ${colors.join(", ")})`;
    document.body.style.backgroundImage = gradient;
  }

  return (
    <div className="gradient-generator">
      <h2>Generador de gradientes</h2>
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          className="color-input"
          type="color"
          value={colors[index] || ""}
          onChange={(e) => handleColorChange(index, e.target.value)}
        />
      ))}
      <button className="generate-button" onClick={generateGradient}>
        Generar
      </button>
    </div>
  );
}
