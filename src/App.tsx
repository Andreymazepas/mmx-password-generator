import { useEffect, useState } from 'react';
import './App.css';
import Menu from './menu';
import PasswordScreen from './password';
import { decode } from './decoder/Decode';

interface MMXState {
  [key: string]: boolean;
}

function App() {
  const [state, setState] = useState<MMXState>({
    armadillo: false,
    boomer: false,
    chill: false,
    flame: false,
    octopus: false,
    spark: false,
    sting: false,
    eagle: false,
    heart_armadillo: false,
    heart_boomer: false,
    heart_chill: false,
    heart_flame: false,
    heart_octopus: false,
    heart_spark: false,
    heart_sting: false,
    heart_eagle: false,
    sub_armadillo: false,
    sub_flame: false,
    sub_eagle: false,
    sub_spark: false,
    leg: false,
    head: false,
    arm: false,
    body: false
  });
  const [receivedPassword, setReceivedPassword] = useState<number[]>([]);


  useEffect(() => {
    // Generate a new password whenever the 'state' variable changes
    console.log("Generating new password")
    const password = generatePassword(state);
    setReceivedPassword(password);
  }, [state]);


  // generate array of 12 random numbers between 1 and 8
  const generatePassword = (state: MMXState) => {
    const password = [];
    for (let i = 0; i < 12; i++) {
      password.push(Math.floor(Math.random() * 8) + 1);
    }
    return password;
  }

  const handleMenuChange = (state: MMXState) => {
    setState(state);
    const test = 136742578646


    decode(test.toString().split('').map(Number));
  }

  return (
    <div className="App">
      <Menu onChange={handleMenuChange} />
      <PasswordScreen receivedPassword={receivedPassword} />
    </div>
  );
}

export default App;
