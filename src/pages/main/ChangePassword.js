import React from 'react'
import 'styled-components/macro'

import tickLogo from '../../assets/tick.png'
import { Layout, Colours, Core } from '../../components'
import { ChangePasswordForm } from './forms'

export default function ChangePassword() {
  return (
    <div
      css={`
        padding: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
      `}
    >
      <Layout.Container>
        <div
          css={`
            display: grid;
            place-items: center;
            margin-top: 20px;
            @media screen and (max-width: 769px) {
              @media screen and (max-height: 1025px) {
                @media screen and (orientation: portrait) {
                  margin-top: 120px;
                }
              }
            }
          `}
        >
          <div
            css={`
              display: grid;
              grid-template-rows: repeat(2, max-content);
              place-items: center;
              grid-row-gap: 10px;
              padding-bottom: 10px;
              border-bottom: none;
              border-bottom: 1px solid ${Colours.border};
              width: calc(100% - 80px);
            `}
          >
            <img
              src={tickLogo}
              alt="tick"
              css={`
                /* Ipod pro */
                @media (width: 1024px) {
                  @media (height: 1366px) {
                    @media (orientation: portrait) {
                      height: 300px;
                      width: 320px;
                    }
                  }
                }
                /* tablet portrait */
                @media screen and (max-width: 769px) {
                  @media screen and (max-height: 1025px) {
                    @media screen and (orientation: portrait) {
                      height: 140px;
                      width: 160px;
                    }
                  }
                }
                /* Tablets */
                @media screen and (max-width: 1025px) {
                  @media screen and (max-height: 769px) {
                    @media screen and (orientation: landscape) {
                      height: 160px;
                      width: 180px;
                    }
                  }
                }
              `}
            />
            <Core.Text color={Colours.input} size="30px">
              Password Currently Active
            </Core.Text>
          </div>
        </div>

        <div
          css={`
            display: grid;
            justify-items: Center;
            margin-top: 40px;
          `}
        >
          <ChangePasswordForm id={'changePassword'} />
        </div>
      </Layout.Container>
    </div>
  )
}
