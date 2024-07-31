import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);

  function decreaseButton() {
    setInput((reduce) => reduce - 1);
  }

  function increaseButton() {
    setInput((increase) => increase + 1);
  }

  return (
    <section>
      <button onClick={decreaseButton}>-</button>
      <span>{input}</span>
      <button onClick={increaseButton}>+</button>
    </section>
  );
}

export default App;
