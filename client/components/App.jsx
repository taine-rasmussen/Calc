import React, { useState } from 'react'


function App () {

	const [calc, setCalc] = useState('')
	const [result, setResult] = useState('')

	const ops = ['/', '*', '+', '-', '.'];

  // Creates numbered btns on calc
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(<button 
		onClick={() => updateCalc(i.toString())} 
		key={i}>{i}</button>)
    }
    return digits;
  } 

  // Updates calc state with value of digit clicked
  const updateCalc = (value) => {
	if (
		ops.includes(value) && calc === '' || 
		ops.includes(value) && ops.includes(calc.slice(-1))
	){
		return null;
	}
	  setCalc(calc + value);
  }


  return (
    <>  
      <div className='app'>
        <div className="calculator">
          <div className="display">
			{calc ? <span>({calc})</span> : null}
			{calc || '0'}
          </div>

          <div className="operators">
            <button onClick={() => updateCalc('/')}>÷</button>
            <button onClick={() => updateCalc('*')}>×</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>−</button>
            <button onClick={() => setCalc('')}>AC</button>
            <button>Del</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('.')}>.</button>
            <button className='equals-bg-colour'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
