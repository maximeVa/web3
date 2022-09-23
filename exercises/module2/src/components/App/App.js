import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const changeCount = (delta) => setCounter(counter + parseInt(delta, 10));
  
  const handleClick = (e) => {
    console.log(e.target.dataset.delta)
    return changeCount(e.target.dataset.delta);
 }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={handleClick}
        text='plus'
        delta={1}
      />
      <Button
        onClick={handleClick}
        text='zero'
        delta={-counter}
      />     
      <Button
        onClick={handleClick}
        text='minus'
        delta={-1}
      />           
    </div>
  )
}

export default App