import useInput from '../hooks/useInput'

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '')
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '')
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return
    }
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClass = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const lastNameInputClass = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClass = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
