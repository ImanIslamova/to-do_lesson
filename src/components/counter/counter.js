import { useState } from 'react';

const Counter = () => {
    let [number, setNumber] = useState(0);
    const minusNumber = () =>{
        setNumber(number - 1);
    };
    const plusNumber = () =>{
        setNumber(number + 1);
    };

    return (
        <div className="counter">
            <div className="count">{number}</div>
            <div className="btns">
            <button className="btn" onClick={minusNumber}>-1</button>
            <button className="btn" onClick={plusNumber}>+1</button>
            </div>
        </div>
    )
}


export default Counter;