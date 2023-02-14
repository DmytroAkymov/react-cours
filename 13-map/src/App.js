import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import TotalClicks from './components/TotalClicks';

const texts = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <TotalClicks number={count} />
      {texts.map((text, index) => {
        return <Button Click={incrementCount} bukwy={text} key={index} />;
      })}
      {/* {[
        <Button Click={incrementCount} bukwy={texts[0]} />,
        <Button Click={incrementCount} bukwy={texts[1]} />,
        <Button Click={incrementCount} bukwy={texts[2]} />,
        <Button Click={incrementCount} bukwy={texts[3]} />,
      ]} */}
    </div>
  );
}

export default App;
