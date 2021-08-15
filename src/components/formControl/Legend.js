import React from 'react'
import 'styled-components/macro'
import { Colours } from '../../components'

function Legend({ children }) {
  return (
    <legend
      css={`
        font-size: 18px;
        color: ${Colours.blue};
        background: ${Colours.foreground};
        padding: 5px 10px;
        border: 1px solid ${Colours.border};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      `}
    >
      {children}
    </legend>
  )
}
export default Legend
