import "./styles.css";
import CounterState from "./CounterState";
import CounterRedux from "./redux/CounterRedux";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CounterState />
      <CounterRedux />
    </div>
  );
}
