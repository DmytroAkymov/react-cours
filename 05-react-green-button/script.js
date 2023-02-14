const App = ({ initialButtonText, buttonTwo }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(buttonTwo);
  const [classesDiv, setClassesDiv] = React.useState('app');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
    setClassesDiv('green-btn');
  };

  return (
    <div className={classesDiv}>
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" buttonTwo="" />);
