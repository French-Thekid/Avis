import React from 'react'
import 'styled-components/macro'

export default function Text({
  size = '20px',
  weight = '400',
  color = '#aab7c8',
  shadow = 'none',
  children,
}) {
  return (
    <p
      css={`
        padding: 0px;
        margin: 0px;
        font-size: ${size};
        color: ${color};
        font-family: 'Roboto';
        font-weight: ${weight};
        text-shadow: ${shadow};
      `}
    >
      {children}
    </p>
  )
}
