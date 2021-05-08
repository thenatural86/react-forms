// import { useState } from 'react'
import BasicForm from './components/BasicForm'

function App() {
  // const [name, setName] = useState('')

  // const renderForm = (name) => {
  //   setName(name)
  // }
  return (
    <div className='app'>
      {/* <SimpleInput renderForm={renderForm} /> */}
      <BasicForm />
    </div>
  )
}

export default App
