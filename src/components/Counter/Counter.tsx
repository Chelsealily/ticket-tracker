import {useState } from 'react'
import "./Counter.scss"

  const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
      }
  
    const handleDecrement = () => {
        setCount(count - 1);
    };


    return (
      <div className="counter">
        <h2>Counter</h2>
        <button className="counter--down" onClick={handleDecrement}>
         - </button>
        {count}
        <button className="counter--up" onClick={handleIncrement}>
        +
        </button>
      </div>
    );
  };  

export default Counter