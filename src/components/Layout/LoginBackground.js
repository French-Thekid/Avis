import React from 'react'
import 'styled-components/macro'
import Fade from 'react-reveal/Fade'

import { Core } from '../../components'
import src1 from '../../assets/mech1.png'
import src2 from '../../assets/mech2.png'

export default function AuthBackground({ children }) {
  return (
    <div
      css={`
        height: calc(100vh - 20px);
        width: calc(100vw - 20px);
        padding: 10px;
        background: #fff;
        display: grid;
        place-items: center;
        grid-template-rows: max-content 1fr max-content;
      `}
    >
      <div
        css={`
          margin-top: 200px;
          @media only screen and (max-width: 1025px) {
            @media only screen and (orientation: landscape) {
              margin-top: 50px;
            }
          }
        `}
      >
        <Fade top>
          <div
            css={`
              display: grid;
              place-items: center;
              grid-template-rows: max-content max-content;
              grid-gap: 10px;
              height: 100%;
            `}
          >
            <Core.Text
              shadow="0px 8px 6px #E2E2E2"
              size="100px"
              color="#FF205D"
              weight="600"
            >
              AVIS
            </Core.Text>
            <Core.Text size="30px">Maintenance Report</Core.Text>
          </div>
        </Fade>
      </div>
      {children}
      <div
        css={`
          display: grid;
          grid-template-columns: max-content 1fr max-content;
          width: 100%;
        `}
      >
        <img src={src1} alt="mechanicPic" />
        <div />
        <img src={src2} alt="mechanicPic" />
      </div>
    </div>
  )
}
