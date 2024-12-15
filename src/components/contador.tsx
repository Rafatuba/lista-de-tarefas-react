import { useEffect, useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  function incrementar() {
    setCount(count + 1);
  }
  function decrementar() {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
    console.log(count);
  }, [count]);

  return (
    <div>
      <h2>Contador com useState:</h2>
      <div>
        <h2>{count}</h2>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}
