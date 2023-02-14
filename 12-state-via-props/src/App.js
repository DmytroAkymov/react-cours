import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import TotalClicks from './components/TotalClicks';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <TotalClicks number={count} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
      <Button Click={incrementCount} />
    </div>
  );
}

export default App;
