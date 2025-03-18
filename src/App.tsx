import React from 'react';
import { Scene } from './Scene';
import './App.css';

function App() {
  const modelPath = '/path/to/your/model.glb'; // Update this with your model path
  
  return (
    <div className="App">
      <Scene modelPath={'/assets/CameraBkdTex.glb'} />
    </div>
  );
}

export default App;
  