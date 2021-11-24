import React from 'react'
import 'styled-components/macro'

export default function Button(props) {
  const {
    children,
    selfContained,
    bgColour = `linear-gradient(180deg, rgba(120,143,255,1) 0%, rgba(53,84,238,1) 100%)`,
    fontColour = 'white',
    width = '100%',
    height = 'max-content',
    type = 'button',
    bottomMargin = '0px',
    disabled,
    border = 'none',
    action,
    fontSize = '14px',
    float,
    onClick,
    ...rest
  } = props

  return (
    <button
      css={`
        width: ${selfContained ? 'max-content' : width};
        min-width: max-content;
        height: ${height};
        background: ${bgColour};
        color: ${fontColour};
        font-size: ${fontSize};
        border: ${border};
        padding: 8px;
        box-shadow: 0px 0px 2px 0px rgba(166, 166, 166, 1);
        border-radius: 5px;
        display: grid;
        justify-items: Center;
        outline: none;
        align-items: Center;
        margin-bottom: ${bottomMargin ? bottomMargin : bottomMargin};
        margin-right: ${float ? '4px' : '0px'};
        &:hover {
          cursor: pointer;
          box-shadow: 0px 8px 20px -2px rgba(196, 196, 196, 1);
          transition: ease-out 0.2s;
          transform: translateY(-1px);
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.6;
          filter: grayscale(40%);
        }
      `}
      disabled={disabled}
      type={type}
      onClick={() => {
        console.log('Clicked')
        onClick()
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
