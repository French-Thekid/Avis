import React from 'react'
import { useLocation } from 'react-router-dom'
import 'styled-components/macro'
import { Core } from '..'
// import Colours from '../Colours'
import NavigationBar from '../navigation'

export default function MainContainer({ children, amount }) {
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
          display: grid;
          grid-template-columns: ${pathname.includes('new-report') && amount > 0
            ? '1fr 150px'
            : pathname.includes('new-report')
            ? '1fr 150px'
            : '1fr 150px'};
          align-items: center;
          padding: 0px 10px;
          -webkit-box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          -moz-box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          box-shadow: 0px 17px 15px -13px rgba(232, 232, 232, 1);
          z-index: 10;
        `}
      >
        <NavigationBar />
        {/* {pathname.includes('new-report') && amount > 0 && (
          <div
            css={`
              margin-right: 10px;
            `}
          >
            <Core.Button
              type="submit"
              form="submitSaved"
            >
              Submit Saved
            </Core.Button>
          </div>
        )}
        {pathname.includes('new-report') && (
          <div
            css={`
              margin-right: 10px;
            `}
          >
            <Core.Button type="submit" form="queue" bgColour={Colours.green}>
              Save ({amount})
            </Core.Button>
          </div>
        )} */}
        <Core.Button
          type="submit"
          form={
            pathname.includes('change-password')
              ? 'changePassword'
              : pathname.includes('renters-out')
              ? 'rentersOut'
              : pathname.includes('renters-in')
              ? 'rentersIn'
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
