import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { FormControl, Core, Colours, Loading, Alert } from '../../../components'
import { Usernames } from './initialValues'
import { FirebaseContext } from '../../firebase'

export default function Loginform() {
  const history = useHistory()
  const firebase = useContext(FirebaseContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Username is a required'),
          password: Yup.string().required('Password is a required'),
        })}
        onSubmit={async ({ username, password }) => {
          setLoading(true)
          firebase
            .doSignInWithEmailAndPassword(username, password)
            .then((authUser) => {
              setLoading(false)

              history.push('/main/new-report')
              Usernames.map((item, index) => {
                if (item.value === username)
                  localStorage.setItem('LoggedInUser', item.label)
                return null
              })
            })
            .catch((error) => {
              console.log(error)
              setLoading(false)
              setError(error)
            })
        }}
      >
        {(props) => {
          const {
            errors,
            touched,
            handleBlur,
            values: { username, password },
            handleChange,
            handleSubmit,
            isSubmitting,
          } = props

          return (
            <div
              css={`
                width: 270px;
              `}
            >
              {loading && <Loading />}
              {error !== '' && (
                <Alert
                  message={
                    error.code === 'auth/wrong-password'
                      ? 'Incorrect Username/Password'
                      : 'Failed to Login'
                  }
                />
              )}
              <div
                css={`
                  display: grid;
                  place-items: center;
                `}
              >
                <Core.Text>Welcome, Please login</Core.Text>
              </div>
              <br />
              <form onSubmit={handleSubmit} data-testid="sign-in-form">
                <div
                  css={`
                    display: grid;
                    grid-row-gap: 20px;
                  `}
                >
                  <section>
                    <FormControl.Select
                      value={username}
                      groups={Usernames}
                      label="Username"
                      name="username"
                      handlechange={handleChange}
                      handleblur={handleBlur}
                      error={errors.username && touched.username}
                    />
                    <FormControl.Error
                      show={errors.username && touched.username}
                      message={errors.username}
                    />
                  </section>
                  <section>
                    <FormControl.Input
                      id="password"
                      label="Password"
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={password}
                      error={errors.password && touched.password}
                    />
                    <FormControl.Error
                      show={errors.password && touched.password}
                      message={errors.password}
                    />
                    <section
                      css={`
                        display: grid;
                        grid-template-columns: 1fr max-content;
                        align-items: center;
                        margin-top: 5px;
                      `}
                    >
                      <section />
                      <section
                        css={`
                          &:hover {
                            cursor: pointer;
                          }
                        `}
                        onClick={() => history.push('/forget-password')}
                      >
                        <Core.Text size="13px" color={Colours.blue}>
                          Forget Password
                        </Core.Text>
                      </section>
                    </section>
                  </section>
                  <div
                    css={`
                      margin-top: 20px;
                    `}
                  >
                    <Core.Button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="sign-in-submit"
                    >
                      Login
                    </Core.Button>
                  </div>
                </div>
              </form>
            </div>
          )
        }}
      </Formik>
    </>
  )
}
