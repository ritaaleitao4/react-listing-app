import React, { useState, ChangeEvent } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import InputRow from "./input"
import { auth } from '../firebase'

interface Props {
  email: string
  password: string
}

export const SigninForm: React.FC<Props> = () => {
  const [email, setUserEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isFormValid, setIsFormValid] = useState<boolean>(true)
  const location = useLocation()
  const history = useHistory()
  const isSignedUp = location.hash.replace("#", "") === "signedup"

  const onUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)
    setIsFormValid(true)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsFormValid(true)
  }

  const checkLogin = async () => {
    await auth.signInWithEmailAndPassword(email, password).then(() => {
      setIsFormValid(true)
      history.push("/listings")
    }).catch(() => {
      setIsFormValid(false)
    })
  }

  return (
    <section className="sign">
      <div className="sign__container">
        {isSignedUp && (
          <p className="sign__info green">
            Signed up successfully! Sign In to continue
          </p>
        )}
        <h3>Sign In</h3>
        <form>
          <InputRow label="Email">
            <input
              value={email}
              onChange={onUserEmailChange}
              className={!isFormValid ? "border-red" : ""}
              type="email"
              placeholder="email@example.com"
              name="sign-in-email"
            />
          </InputRow>
          <InputRow label="Password">
            <input
              value={password}
              onChange={onPasswordChange}
              className={!isFormValid ? "border-red" : ""}
              placeholder="password"
              type="password"
              name="sign-in-password"
            />
          </InputRow>

          {!isFormValid && (
            <div className="input-box--text-error">
              Invalid email or password
            </div>
          )}
        </form>

        <button onClick={checkLogin}>
          Sign In
        </button>

        <p className="sign__info">
          Don't have an account?
          <Link to="/signup">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SigninForm