import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'styled-components/macro'
import { Core, FormControl, Colours } from '../../../components'

export default function ChangePasswordForm({ id }) {
  const passwordRegExp1 = /[a-z]/
  const passwordRegExp2 = /[A-Z]/
  const passwordRegExp3 = /[0-9]/

  return (
    <Formik
      initialValues={{
        previousPassword: '',
        proposedPassword: '',
        passwordConfirmation: '',
      }}
      validationSchema={Yup.object().shape({
        previousPassword: Yup.string().required('Current Password is required'),
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
      onSubmit={async ({ proposedPassword, previousPassword }, actions) => {
        console.log('Password Changed', proposedPassword, previousPassword)

        actions.setSubmitting(false)
      }}
    >
      {(props) => {
        const {
          values: { proposedPassword, previousPassword, passwordConfirmation },
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        } = props

        return (
          <>
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
                    id="previousPassword"
                    label="Current Password"
                    placeholder="Current Password"
                    name="previousPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={previousPassword}
                    data-testid="newPassword-previousPassword"
                    error={errors.previousPassword && touched.previousPassword}
                  />
                  <FormControl.Error
                    show={errors.previousPassword && touched.previousPassword}
                    message={errors.previousPassword}
                  />
                </section>
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
