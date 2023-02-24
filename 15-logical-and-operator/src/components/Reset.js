function Reset(props) {
  const { number, kakaszka } = props;
  return (
    number > 0 && (
      <div>
        <button style={{ backgroundColor: 'lightgreen' }} onClick={kakaszka}>
          Reset
        </button>
      </div>
    )
  );
}

export default Reset;
