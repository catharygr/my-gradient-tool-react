import { useState } from "react";

export default function GradientGenerator() {
  const [colors, setColors] = useState([]);



  function handleColorChange(index, color) {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);

  }

  function generateGradient() {
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`;
    
    return (
      <div>
        <h2>Generador de gradientes</h2>
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="color"
            value={colors[index] || ''}
            onChange={(e) => handleColorChange(index, e.target.value)}
          />
        ))}
        <button onClick={generateGradient}>Generar</button>
      </div>
    );}
      



 