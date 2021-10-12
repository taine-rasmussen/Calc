import React, { useState } from 'react'


function App () {

	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

  // Creates numbered btns on calc
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(<button onClick={() => updateCalc(i)} key={i}>{i}</button>)
    }
    return digits;
  } 


  const updateCalc = (value) => {
	  setCalc(calc + value);
  }


  return (
    <>  
      <div className='app'>
        <div className="calculator">
          <div className="display">
            <span>(0)</span> {calc || '0'}
          </div>

          <div className="operators">
            <button>÷</button>
            <button>×</button>
            <button>+</button>
            <button>−</button>
            <button>AC</button>
            <button>Del</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button>.</button>
            <button className='equals-bg-colour'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
