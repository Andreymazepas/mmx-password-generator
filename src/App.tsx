import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const Counter = ({ num }: { num: number }) => {
  const [value, setValue] = useState(num);

  const handleClick = () => {
    if (value >= 8) {
      setValue(1);
    } else {
      setValue((value) => value + 1);
    }
  };

  return (
    <div
      className="counter"
      style={{
        backgroundPositionX: `calc(-28 * 3 * ${value - 1}px) `,
        color: 'pink',
      }}
      onClick={handleClick}
    ></div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>{' '}
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
        <div className="box">
          <div className="image-cursor">
            <Counter num={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
