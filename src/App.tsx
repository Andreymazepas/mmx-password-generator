import './App.css';
import Menu from './menu';
import PasswordScreen from './password';

function App() {

  return (
    <div className="App">
      <Menu onChange={console.log} />
      <PasswordScreen />
    </div>
  );
}

export default App;
