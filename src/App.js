
import React from 'react'; 
import Counter from './components/counter/counter';
import Input from './components/input/input';
import Calculator from './components/calculator/calculator';
import Degrees from './components/degrees/degrees';
import Switch from './components/switch/switch';



const App = () => {
  return  (
    <div class="tod">
      <Input />
      <Counter />
      <Calculator />
      <Degrees />
      <Switch />
    </div>
    
  )
}

export default App;

