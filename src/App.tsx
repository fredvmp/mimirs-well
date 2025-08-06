import { useState } from 'react'
import SignUpPanel from './components/panels/SignUpPanel/SignUpPanel'
import { Rain } from './components/rain/Rain'




function App() {

  return (
    <>
      <div className="main-window">
        {/*<LogButton /> */}
        <Rain />
        <SignUpPanel />

      </div>
    </>
  )
} 

export default App
