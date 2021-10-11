import React from 'react'


function App () {

  return (
    <>
      <div className='app'>
        <div className="calculator">
          <div className="display">
            <span>(0)</span> 0
          </div>

          <div className="operators">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
