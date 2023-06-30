export default function GradientGenerator() {
  const [colors, setColors] = useState([]);

  function handleColorChange(color) {
    setColor1(color);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generador de gradientes</h1>

        <div className="color-picker">
          <input
            type="color"
            value={colors[0]}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}
