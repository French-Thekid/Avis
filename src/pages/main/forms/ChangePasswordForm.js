import React, { useState, useContext } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'styled-components/macro'
import {
  Core,
  FormControl,
  Colours,
  Loading,
  Notification,
} from '../../../components'
import { FirebaseContext } from '../../firebase'

export default function ChangePasswordForm({ id }) {
  const passwordRegExp1 = /[a-z]/
  const passwordRegExp2 = /[A-Z]/
  const passwordRegExp3 = /[0-9]/
  const [loading, setLoading] = useState(false)
  const firebase = useContext(FirebaseContext)
  const [completed, setcompleted] = useState(false)
  const [completed1, setcompleted1] = useState(false)

  const showNotification = () => {
    setcompleted(true)
    setTimeout(() => {
      setcompleted(false)
    }, 8000)
  }

  const showNotification1 = () => {
    setcompleted1(true)
    setTimeout(() => {
      setcompleted1(false)
    }, 8000)
  }

  return (
    <Formik
      initialValues={{
        proposedPassword: '',
        passwordConfirmation: '',
      }}
      validationSchema={Yup.object().shape({
        proposedPassword: Yup.string()
          .matches(passwordRegExp1, 'Lower Case value required')
          .matches(passwordRegExp2, 'Upper Case value required')
          .matches(passwordRegExp3, 'Numeric value required')
          .required('Password is required')
          .min(8),
        passwordConfirmation: Yup.string()
          .required('Password Confirmation is required')
          .oneOf([Yup.ref('proposedPassword'), null], 'Passwords must match'),
      })}
      onSubmit={async ({ proposedPassword }, { resetForm }) => {
        setLoading(true)
        firebase
          .doPasswordUpdate(proposedPassword)
          .then((authUser) => {
            setLoading(false)
            showNotification()
            resetForm({ proposedPassword: '', passwordConfirmation: '' })
          })
          .catch((error) => {
            console.log(error)
            showNotification1()
            setLoading(false)
          })
      }}
    >
      {(props) => {
        const {
          values: { proposedPassword, passwordConfirmation },
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        } = props

        return (
          <>
            {loading && <Loading />}
            <Notification
              setcompleted={setcompleted}
              subject="Password Successfully Updated"
              message="Your next signin will require this new password."
              notification={completed}
            />
            <Notification
              setcompleted={setcompleted1}
              title='Request Unsucessful'
              subject="Password Updated Failed"
              message="Please Logout then Login and try again."
              notification={completed1}
              warning
            />
            <form
              onSubmit={handleSubmit}
              data-testid="sign-in-form"
              id={id}
              css={`
                width: 346px;
              `}
            >
              <div
                css={`
                  width: 100%;
                  display: grid;
                  grid-row-gap: 20px;
                  @media screen and (min-width: 1440px) {
                    grid-row-gap: 30px;
                    margin-bottom: 20px;
                  }
                `}
              >
                <div
                  css={`
                    width: 100%;
                    display: grid;
                    justify-items: center;
                    margin-bottom: 10px;
                  `}
                >
                  <Core.Text color={Colours.input} size="20px">
                    Please enter your new password below
                  </Core.Text>
                </div>
                <section>
                  <FormControl.Input
                    id="proposedPassword"
                    label="New Password"
                    placeholder="New Password"
                    name="proposedPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={proposedPassword}
                    data-testid="newPassword-proposedPassword"
                    error={errors.proposedPassword && touched.proposedPassword}
                  />
                  <FormControl.Error
                    show={errors.proposedPassword && touched.proposedPassword}
                    message={errors.proposedPassword}
                  />
                </section>
                <section>
                  <FormControl.Input
                    id="passwordConfirmation"
                    label="Password Confirmation"
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={passwordConfirmation}
                    data-testid="newPassword-passwordConfirmation"
                    error={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
                    }
                  />
                  <FormControl.Error
                    show={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
                    }
                    message={errors.passwordConfirmation}
                  />
                </section>
              </div>
              <FormControl.PasswordStrength password={proposedPassword} />
            </form>
          </>
        )
      }}
    </Formik>
  )
}
