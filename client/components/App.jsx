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

  // Updates calc display
  const updateCalc = (value) => {

	// Handles oporators being used twice in a row or as first input
		if (
			ops.includes(value) && calc === '' || 
			ops.includes(value) && ops.includes(calc.slice(-1))
		){
			return null;
		}
	// Updates calc by adding it with current value
		setCalc(calc + value);

	// combines previous input and current value with oporator between them
	  if (!ops.includes(value)){
		  setResult(eval(calc + value.toString()));
	  }
  }

  	// updates calc with value of current answer
  	const calculate = () => {
		  setCalc(eval(calc.toString()));
	  }
	
	// Removes last value from calc
	const deleteBtn = () => {
		if (calc === ''){
			return null;
		} 

		const value = calc.slice(0, -1);
		setCalc(value);
	}

  return (
    <>  
      <div className='app'>
        <div className="calculator">
          <div className="display">
			{calc ? <span>({result})</span> : null}
			{calc || '0'}
          </div>

          <div className="operators">
            <button onClick={() => updateCalc('/')}>÷</button>
            <button onClick={() => updateCalc('*')}>×</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>−</button>
            <button onClick={() => setCalc('')}>AC</button>
            <button onClick={deleteBtn}>Del</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate} className='equals-bg-colour'>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
