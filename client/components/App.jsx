import React from 'react'



function App () {

  // Creates numbered btns on calc
  const createDigits = () => {
    const digits = []
    for (let i = 0; i < 10; i++) {
      digits.push(<button>{i}</button>)
    }
    return digits
  } 

  return (
    <>  
      <div className='app'>
        <div className="calculator">
          <div className="display">
            <span>(0)</span> 0
          </div>

          <div className="operators">
            <button>÷</button>
            <button>×</button>
            <button>+</button>
            <button>−</button>
            <button>Delete</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
