import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Text indide of the Wrapper</h1>
        <button>Click me!</button>
      </Wrapper>
    </div>
  );
}

export default App;
