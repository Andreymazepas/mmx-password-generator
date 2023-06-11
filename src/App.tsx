import { useEffect, useState } from 'react';
import './App.css';
import Menu from './menu';
import PasswordScreen from './password';
import { decode } from './cryptography/Decode';
import { IPassword, IState } from './common/types';
import { initialState } from './common/common';

function App() {
  const [state, setState] = useState<IState>(initialState);
  const [encodedPassword, setEncodedPassword] = useState<IPassword | null>(null);
  const [passwordToDecode, setPasswordToDecode] = useState<IPassword>([1, 3, 6, 7, 4, 2, 5, 7, 8, 6, 4, 6]);


  useEffect(() => {
    console.log("Generating new password")
    const password = generatePassword(state);
    setEncodedPassword(password as IPassword);
  }, [state]);

  useEffect(() => {
    console.log("Decoding password")
    decode(passwordToDecode);
  }, [passwordToDecode]);


  const generatePassword = (state: IState) => {
    const password = [];
    for (let i = 0; i < 12; i++) {
      password.push(Math.floor(Math.random() * 8) + 1);
    }
    return password;
  }

  const handleMenuChange = (state: IState) => {
    setState(state);
  }

  const handlePasswordChange = (password: IPassword) => {
    setPasswordToDecode(password);
  }

  return (
    <div className="App">
      <Menu onChange={handleMenuChange} state={state} />
      <PasswordScreen onChange={handlePasswordChange} encodedPassword={encodedPassword} />
    </div>
  );
}

export default App;
