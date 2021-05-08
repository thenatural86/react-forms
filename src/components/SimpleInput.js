import useInput from '../hooks/useInput'

const SimpleInput = ({ renderForm }) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    renderForm(enteredName)
    resetNameInput()
    resetEmailInput()
  }

  const nameInputClass = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClass = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className='error-text'>Name cannot be empty</p>
        )}
      </div>

      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Email cannot be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} onSubmit={formSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default SimpleInput
