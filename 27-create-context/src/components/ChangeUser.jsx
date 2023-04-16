import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';

function ChangeUser() {
  const { changeSetUser } = useContext(UserContext);

  const [inputName, setInputName] = useState('');

  function changeInput() {
    if (!inputName) {
      return inputName;
    } else {
      changeSetUser(inputName);
    }
  }

  return (
    <>
      <input
        placeholder="Enter name"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      ></input>
      <button onClick={() => changeInput()}>Change user</button>
    </>
  );
}

export default ChangeUser;
