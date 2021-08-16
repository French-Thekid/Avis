import React from 'react'
import { useLocation } from 'react-router-dom'
import 'styled-components/macro'
import { Core } from '..'
import Colours from '../Colours'
import NavigationBar from '../navigation'

export default function MainContainer({ children }) {
  const { pathname } = useLocation()
  return (
    <div
      css={`
        display: grid;
        grid-template-rows: 65px 1fr;
        height: 100vh;
        width: 100vw;
      `}
    >
      <div
        css={`
          background: #fff;
          /* border-bottom: 1px solid ${Colours.border}; */
          display: grid;
          grid-template-columns: 1fr 150px;
          align-items: center;
          padding: 0px 10px;
          -webkit-box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          -moz-box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          z-index: 10;
        `}
      >
        <NavigationBar />
        <Core.Button
          type="submit"
          form={
            pathname.includes('change-password')
              ? 'changePassword'
              : 'submitForm'
          }
        >
          {pathname.includes('change-password') ? 'Save' : 'Submit'}
        </Core.Button>
      </div>
      <div
        css={`
          background: #f9f9ff;
          padding: 10px;
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    </div>
  )
}
