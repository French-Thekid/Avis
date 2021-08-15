import React from 'react'
import 'styled-components/macro'
import { Core, Colours } from '../components'

function Alert({ message }) {
  return (
    <div
      css={`
        background: ${Colours.red};
        box-shadow: 0px 21px 36px -9px rgba(224, 224, 224, 1);
        width: calc(100% - 20px);
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 5px;
      `}
    >
      <Core.Text size="15px" color={'white'}>
        {message}
      </Core.Text>
    </div>
  )
}

export default Alert
