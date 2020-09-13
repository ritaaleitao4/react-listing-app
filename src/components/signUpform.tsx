import React, { useState, useEffect, ChangeEvent } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import InputRow from "./input"
import { auth } from '../firebase'

interface Props {
    email: string
    password: string
}

export const SignupForm: React.FC<Props> = () => {
  const [email, setUserEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [passwordStateInvalid, setPasswordStateInvalid] = useState<boolean>(
    false,
  )
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false)
  const history = useHistory()

  const onUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
  }

  const onSignupClick = async () => {
    let formValid = true
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!emailRegex.test(email)) {
      setEmailInvalid(true)
      formValid = false
    }

    if (password !== confirmPassword || password === "") {
      setPasswordStateInvalid(true)
      formValid = false
    }

    if (formValid) {
      setEmailInvalid(false)
      setPasswordStateInvalid(false)
      await auth.createUserWithEmailAndPassword(email, password).then(() => history.push("/login#signedup"))
    }
  }

  useEffect(() => {
    setEmailInvalid(false)
    setPasswordStateInvalid(false)
  }, [email, password, confirmPassword])

  return (
    <section className="sign">
      <div className="sign__container">
        <h3>Sign Up</h3>
        
        <form>
          <InputRow label="User Email">
            <input
              value={email}
              onChange={onUserEmailChange}
              className={emailInvalid ? "border-red" : ""}
              type="email"
              placeholder="email@example.com"
            />
          </InputRow>

          {emailInvalid && (
            <div className="input-box--text-error">
              Invalid Email
            </div>
          )}

          <InputRow label="Password">
            <input
              value={password}
              onChange={onPasswordChange}
              className={passwordStateInvalid ? "border-red" : ""}
              placeholder="password"
              type="password"
            />
          </InputRow>

          <InputRow label="Confirm Password">
            <input
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              className={passwordStateInvalid ? "border-red" : ""}
              type="password"
              placeholder="confirm password"
            />
          </InputRow>

          {passwordStateInvalid && (
            <div className="input-box--text-error">
              Passwords don't match.
            </div>
          )}
        </form>

        <button onClick={onSignupClick}>
          Sign Up
        </button>

        <p className="sign__info">
          Already have an account? 
          <Link to="/login">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SignupForm
