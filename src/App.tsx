import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const Counter = ({ num }: { num: number }) => {
  return (
    <div
      className="counter"
      style={{
        backgroundPositionX: `calc(-28 * 3 * ${num - 1}px) `,
        color: 'pink',
      }}
    ></div>
  );
};

function App() {
  const [password, setPassword] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const handleClick = (index: number) => {
    setPassword(
      password.map((el, i) => {
        if (index === i) {
          return el >= 8 ? 1 : el + 1;
        }
        return el;
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        {password.map((num, index) => (
          <div className="box" key={index}>
            <div className="image-cursor" onClick={() => handleClick(index)}>
              <Counter num={num} />
            </div>
          </div>
        ))}
        <div className="text">
          <button
            onClick={() => {
              setPassword(password.map((el) => 1));
            }}
          >
            reset
          </button>
          <button
            onClick={() => {
              console.log(password);
            }}
          >
            debug
          </button>
          <button
            onClick={() => {
              setPassword(password.map((el) => Math.floor(Math.random() * 8)));
            }}
          >
            random
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
