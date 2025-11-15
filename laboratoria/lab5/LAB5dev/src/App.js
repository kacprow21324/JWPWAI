import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import RotatingImage from './RotatingImage';
import HoverArea from './HoverArea';
import ImageToggle from './ImageToggle';
import JsonLoader from './JsonLoader';
import FileUpload from './FileUpload';
import StyleChanger from './StyleChanger';

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <h1>Laboratorium 5</h1>
      </div>

      <main className="App-content">
      
        <h2>Zadanie 2.</h2>
        
        <div className="exercise-row">
          
          <div className="exercise-card">
            <h3>Ćwiczenie 1.</h3>
            <ToggleDetails/>
          </div>
          
          <div className="exercise-card">
            <h3>Ćwiczenie 2.</h3>
            <ScoreDisplay score={49}/>
            <ScoreDisplay score={51}/>
            <ScoreDisplay score={81}/>
          </div>

          <div className="exercise-card">
            <h3>Ćwiczenie 3.</h3>
            <TaskList/>
          </div>

          <div className="exercise-card">
            <h3>Ćwiczenie 4.</h3>
            <UserList/>
          </div>

          <div className="exercise-card">
            <h3>Ćwiczenie 5.</h3>
            <TimerCounter/>
          </div>

        </div>

        <h2>Zadanie 3.</h2>

        <div className="exercise-row">
          
          <div className="exercise-card">
            <h3>handleCLick</h3>
            <RotatingImage/>
          </div>
          
          <div className="exercise-card">
            <h3>handleMouseOver:</h3>
            <HoverArea />
          </div>

          <div className="exercise-card">
            <h3>showImage:</h3>
            <ImageToggle />
          </div>

          <div className="exercise-card">
            <h3>loadDataFromJson:</h3>
            <JsonLoader />
          </div>

          <div className="exercise-card">
            <h3>uploadFile:</h3>
            <FileUpload />
          </div>

          <div className="exercise-card">
            <h3>changeStyle (Spread):</h3>
            <StyleChanger />
          </div>

        </div>
      </main>
      
      <div className="App-footer">
        <p>Autor: Kacper Woszczyło nr. indeksu: 21324</p>
      </div>
      
    </div>
  );
}

export default App;