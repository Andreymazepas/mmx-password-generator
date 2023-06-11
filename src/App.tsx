import { useEffect, useState } from 'react';
import './App.css';
import Menu from './menu';
import PasswordScreen from './password';
import { decode } from './cryptography/Decode';
import { IPassword, IState } from './common/types';
import { initialState } from './common/common';
import { encode } from './cryptography/Encode';

function App() {
  const [state, setState] = useState<IState>(initialState);
  const [encodedPassword, setEncodedPassword] = useState<IPassword | null>(null);
  const [passwordToDecode, setPasswordToDecode] = useState<IPassword>([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);
  const [stateSetFromPassword, setStateSetFromPassword] = useState<IState | null>(initialState);


  useEffect(() => {
    if (JSON.stringify(stateSetFromPassword) !== JSON.stringify(state)) {
      const password = encode(state);
      setInvalidPassword(false);
      setStateSetFromPassword(null);
      setEncodedPassword(password as IPassword);
    }
  }, [state]);

  useEffect(() => {
    const decoded = decode(passwordToDecode);
    if (decoded === 'Invalid password') {
      setInvalidPassword(true);
      setState(initialState);
      setStateSetFromPassword(initialState);
    } else {
      setInvalidPassword(false);
      setStateSetFromPassword(decoded);
      setState(decoded as IState);
    }
  }, [passwordToDecode]);


  const handleMenuChange = (state: IState) => {
    setState(state);
  }

  const handlePasswordChange = (password: IPassword) => {
    setPasswordToDecode(password);
  }

  return (
    <div className="App">
      <Menu onChange={handleMenuChange} state={state} />
      <PasswordScreen onChange={handlePasswordChange} encodedPassword={encodedPassword} invalidPassword={invalidPassword} />
      <div className="madeby">Made by <a href="https://mazepas.dev">Andrey Mazépas</a></div>
    </div>
  );
}

export default App;
