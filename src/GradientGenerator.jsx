import { useState } from "react";

export default function GradientGenerator() {
  const [colors, setColors] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");

  function handleColorChange(index, color) {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  }

  function generateGradient() {
    const colorStops = colors.join(", ");
    const gradient = `linear-gradient(45deg, ${colorStops})`;
    setBackgroundImage(gradient);
  }

  return (
    <div>
      <div className="gradient-generator">
        <h2>Generador de gradientes</h2>
        <div
          className="gradient-preview"
          style={{
            backgroundImage: backgroundImage,
          }}
        ></div>
        <div className="color-input">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="color"
              value={colors[index] || ""}
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
          ))}
        </div>
        <button className="generate-button" onClick={generateGradient}>
          Generar
        </button>
      </div>
    </div>
  );
}
