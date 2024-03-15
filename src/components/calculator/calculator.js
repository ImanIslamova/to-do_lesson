import { useState } from "react";

const Calculator = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    const getData = () =>{
        setResult(Number(value1) + Number(value2));
    }

    return (
        <div className="calculator">
            <input className="input"
            type="text" 
            name="input"
            placeholder="Введите первое число"
            value={value1}
            onChange={e => setValue1(e.target.value)}
            />
            <input className="input"
            type="text" 
            name="input"
            placeholder="Введите второе число"
            value={value2}
            onChange={e => setValue2(e.target.value)}
            />
            <button className="btn__add" onClick={getData}>=</button>
            <div className="list">
                <p>
                    Ваш ответ: {result}
                </p>
            </div>
        </div>
    )
}


export default Calculator;