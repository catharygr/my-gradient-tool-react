import { useState } from "react";

const initialState = {
  colors: ["#ff0000", "#000C66", "#F8D210", "#BD97CB", "#ECF87F"],
  backgroundImage: "",
};

export default function GradientGenerator() {
  const [state, setState] = useState(initialState);

  function handleColorChange(index, color) {
    const newColors = [...state.colors];
    newColors[index] = color;
    setState({ ...state, colors: newColors });
  }

  function generateGradient() {
    const colorStops = state.colors.join(", ");
    const gradient = `linear-gradient(45deg, ${colorStops})`;
    setState({ ...state, backgroundImage: gradient });
  }

  function resetState() {
    setState(initialState);
  }

  return (
    <div>
      <div className="gradient-generator">
        <h2>Generador de gradientes</h2>
        <div className="actions"></div>
        <div
          className="gradient-preview"
          style={{
            backgroundImage: state.backgroundImage,
          }}
        ></div>
        <div className="color-input">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              type="color"
              value={state.colors[index] || ""}
              onChange={(e) => handleColorChange(index, e.target.value)}
            />
          ))}
        </div>
        <button className="generate-button" onClick={generateGradient}>
          Generar
        </button>
        <button className="reset-button" onClick={resetState}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}
