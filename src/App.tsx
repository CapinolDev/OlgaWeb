import "./App.css";
import Navbar from "./components/navbar";
import Silk from "./components/Silk";

function App() {
  return (
    <div className="page">
      <div className="canvas-bg">
        <Silk
          className="silk-canvas"
          color="#7B7481"
          speed={6}
          scale={1}
          noiseIntensity={1.2}
        />
      </div>

      <div className="page-shell">
        <Navbar />
        <main className="content"></main>
      </div>
    </div>
  );
}

export default App;
