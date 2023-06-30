import Counter from "./components/Counter";
import CounterHolder from "./Context/CounterHolder";
import './style.css';

function App() {
  return (
    <CounterHolder>
      <div className="App">
        <h3>Counter App</h3>
        <div className="counter">
          <Counter/>
        </div>
      </div>
    </CounterHolder>
    
  );
}

export default App;
