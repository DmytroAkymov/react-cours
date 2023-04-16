import { createContext } from 'react';

const UserContext = createContext({
  userName: '',
  changeSetUser: () => {},
});

export default UserContext;
