import { useState } from 'react'

const SimpleInput = ({ renderForm }) => {
  const [enteredName, setEnteredName] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [touched, setTouched] = useState(false)

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const inputBlurHandler = () => {
    setTouched(true)
    if (enteredName.length === 0) {
      setIsValid(false)
      return
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setTouched(true)
    if (enteredName.length === 0) {
      setIsValid(false)
      return
    }
    setIsValid(true)
    renderForm(enteredName)
    setEnteredName('')
  }

  const invalidInput = !isValid && touched

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
        {isValid && <p className='error-text'>Name cannot be empty</p>}
      </div>
      <div className='form-actions'>
        <button onSubmit={formSubmitHandler}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
