import React from 'react'
import 'styled-components/macro'

import { Colours, Core } from '../../../components'

export default function Completion({ score }) {
  return (
    <div
      css={`
        display: grid;
        grid-template-rows: max-content 1fr;
      `}
    >
      <div
        css={`
          display: grid;
          grid-template-rows: 1fr;
          align-items: Center;
          grid-column-gap: 5px;
          margin-bottom: 15px;
        `}
      >
        <section
          css={`
            background: #d1cae8;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
          `}
        >
          <div
            css={`
              width: ${score}%;
              height: 10px;
              background: ${score === 100 ? Colours.green : Colours.blue};
              border-top-right-radius: 50px;
              border-bottom-right-radius: 50px;
              transition: ease-out 0.2s;
            `}
          />
        </section>
        <div
          css={`
            display: grid;
            justify-items: end;
          `}
        >
          <Core.Text
            size="15px"
            color={score === 100 ? Colours.green : Colours.blue}
          >
            {score}% Complete
          </Core.Text>
        </div>
      </div>
    </div>
  )
}
