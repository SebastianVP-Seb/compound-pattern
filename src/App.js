import logo from './logo.svg';
import './App.css';
// import CompoundPattern from './page/CompoundPattern';
// import CompoundPatternWithStyledComp from './page/CompoundPatternWithStyledComp';
import SystemDesign from './page/SystemDesign';

function App() {
  return (
    <div className="App">
      <aside className="app_aside">
        <img src={logo} className="App-logo" alt="logo" />
      </aside>
      <main>
        <h1>iAmSebastian Compound Pattern</h1>
        {/* <CompoundPattern /> */}
        {/* <CompoundPatternWithStyledComp /> */}
        <SystemDesign />
      </main>

    </div>
  );
}

export default App;
