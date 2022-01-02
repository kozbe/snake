import './App.css';
import Grid from './Components/Grid';

import GameContextWrapper from './Context/gameContext';

function App() {
  return (
    <div className="App">
      <h1>Snake 🐍</h1>
      <GameContextWrapper>
        <Grid />
      </GameContextWrapper>
    </div>
  );
}

export default App;
