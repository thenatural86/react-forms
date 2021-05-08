import { useState } from 'react'

const SimpleInput = ({ renderForm }) => {
  const [enteredName, setEnteredName] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = enteredName.trim() !== ''
  const invalidInput = !isValid && touched

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const inputBlurHandler = () => {
    setTouched(true)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setTouched(true)

    if (!isValid) {
      return
    }

    renderForm(enteredName)
    setEnteredName('')
    setTouched(false)
  }

  const nameInputClass = invalidInput ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={inputBlurHandler}
        />
        {invalidInput && <p className='error-text'>Name cannot be empty</p>}
      </div>
      <div className='form-actions'>
        <button onSubmit={formSubmitHandler}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
