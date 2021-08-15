import React from 'react'
import 'styled-components/macro'
import { Colours } from '../../components'

function Fieldset({ children, borderColour = Colours.border }) {
  return (
    <fieldset
      css={`
        width: calc(100% - 32px);
        border: 1px solid ${borderColour};
        border-radius: 5px;
        padding: 15px;
        margin: 0px;
        background: ${Colours.foreground};
      `}
    >
      {children}
    </fieldset>
  )
}
export default Fieldset
