import {useState } from 'react'
import "./Counter.scss"

  const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
      }
  
    const handleDecrement = () => {
      if (count<1) {
        setCount(count);
      } else {
       setCount(count - 1);
      }

      }
    


    return (
      <div className="counter">
        <h4>Counter</h4>
        <p>{count}</p>
        <div className="counter__buttons">
        <button className="counter--down" onClick={handleDecrement}>
         - </button>
        <button className="counter--up" onClick={handleIncrement}>
        +
        </button></div>
      </div>
    );
  };  

export default Counter