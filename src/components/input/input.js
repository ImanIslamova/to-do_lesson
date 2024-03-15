import { useState } from "react";

const Input = () =>{
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    
    const getData = () =>{
        setList([...list, { value: value }])
    }
    return (
        <div className="inputs">
            <input className="input" type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button className="btn__add" onClick={getData}>+</button>
            <div class="todo__task">
                {list.map(({value}) => (
                    <p>
                     {value}
                    </p>
                ))} 
            </div> 
        </div>
    )
}

export default Input;