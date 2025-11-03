import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import RotatingImage from './RotatingImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zadanie 2.</h1>
        <h2>Ćwiczenie 1.</h2>
        <ToggleDetails/>

        <h2>Ćwiczenie 2.</h2>
        <ScoreDisplay score={49}/>
        <ScoreDisplay score={51}/>
        <ScoreDisplay score={81}/>

        <h2>Ćwiczenie 3.</h2>
        <TaskList/>

        <h2>Ćwiczenie 4.</h2>
        <UserList/>

        <h2>Ćwiczenie 5.</h2>
        <TimerCounter/>

        <h1>Zadanie 3.</h1>
        <RotatingImage/>

      </header>
    
    </div>
  );
}

export default App;
