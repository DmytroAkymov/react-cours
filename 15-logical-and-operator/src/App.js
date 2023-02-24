import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import TotalClicks from './components/TotalClicks';
import Reset from './components/Reset';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <TotalClicks number={count} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
      <Reset number={count} kakaszka={resetCount} />
    </div>
  );
}

export default App;
