import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import {
  FormControl,
  Core,
  Colours,
  Loading,
  Alert,
  Notification,
} from '../../../components'
import { Usernames } from './initialValues'
import { FirebaseContext } from '../../firebase'

export default function Loginform() {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const firebase = useContext(FirebaseContext)
  const [error, setError] = useState('')
  const [completed, setcompleted] = useState(false)

  const showNotification = () => {
    setcompleted(true)
    setTimeout(() => {
      setcompleted(false)
      history.push('/')
    }, 8000)
  }

  return (
    <>
      <Formik
        initialValues={{ username: '' }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Username is a required'),
        })}
        onSubmit={async ({ username }, actions) => {
          console.log(username)
          actions.setSubmitting(false)
          setLoading(true)
          firebase
            .doPasswordReset(username)
            .then((authUser) => {
              setLoading(false)
              showNotification()
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
            values: { username },
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
              {error !== '' && <Alert message={'Failed to send email'} />}
              <Notification
                setcompleted={setcompleted}
                subject="Password Reset Email Sent"
                message="Please check your email for link to change your password"
                notification={completed}
              />
              <form onSubmit={handleSubmit} data-testid="sign-in-form">
                <div
                  css={`
                    display: grid;
                    grid-row-gap: 20px;
                  `}
                >
                  <Core.Text size="16px" color={Colours.input}>
                    Please select your name then submit, shortly after you'll
                    receive an email with reset instructions
                  </Core.Text>
                  <br />
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

                  <div
                    css={`
                      margin-top: 20px;
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      grid-gap: 30px;
                      align-items: center;
                    `}
                  >
                    <Core.Button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="sign-in-submit"
                      fontColour={Colours.blue}
                      bgColour={'#fff'}
                      border={`1px solid ${Colours.blue}`}
                      onClick={() => history.push('/')}
                    >
                      Back
                    </Core.Button>
                    <Core.Button
                      type="submit"
                      disabled={isSubmitting}
                      data-testid="sign-in-submit"
                    >
                      Submit
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
