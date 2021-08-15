import React from 'react'
import 'styled-components/macro'
import { Colours } from '../../components'

export default function Error({ show, message, ...rest }) {
  return (
    <p
      css={`
        font-size: 12px;
        margin: 0px;
        color: ${Colours.red};
        padding: 0px;
        margin: 0px;
        margin-top: 3px;
      `}
      {...rest}
    >
      {show && message}
    </p>
  )
}
