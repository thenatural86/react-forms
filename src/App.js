import SimpleInput from './components/SimpleInput'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  const renderForm = (name) => {
    console.log('render', name)
    setName(name)
  }
  return (
    <div className='app'>
      <SimpleInput renderForm={renderForm} />
      {name}
    </div>
  )
}

export default App
