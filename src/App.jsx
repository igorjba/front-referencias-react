import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

  function toIncrementRef() {
    countRef.current += 1;
    console.log("Valor de countRef", countRef.current);
  }

  function toIncrementLet() {
    count += 1;
    console.log("Valor de count", count);
  }

  return (
    <div className="App">
      <button onClick={() => toIncrementRef()}>
        Increment ref
      </button>
      <button onClick={() => toIncrementLet()} style={{ marginTop: "10px" }} >
        Increment let
      </button>
    </div>
  );
}

export default App;
