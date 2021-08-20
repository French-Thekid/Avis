import React from 'react'
import 'styled-components/macro'
import { Colours, Core, Icons } from '../../components'

export default function CustomCard({
  children,
  title,
  minHeight = 'calc(100% - 2px)',
  minWidth = 'auto',
  close = false,
}) {
  return (
    <div
      css={`
        min-height: ${minHeight};
        min-width: ${minWidth};
        display: grid;
        grid-template-rows: 40px 1fr;
        overflow-y: auto;
        border: 1px solid ${Colours.border};
        border-radius: 5px;
      `}
    >
      <div
        css={`
          background: ${Colours.header};
          border-bottom: 1px solid ${Colours.border};
          display: grid;
          grid-template-columns: 1fr max-content;
          align-items: center;
          padding: 0px 10px;
        `}
      >
        <Core.Text weight="500" color={Colours.input}>
          {title}
        </Core.Text>

        <div
          onClick={() => close()}
          css={`
            height: 24px;
            width: max-content;
            border: 2px solid ${Colours.border};
            border-radius: 5px;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          <Icons.CloseRoundedIcon
            style={{ margin: '0px', padding: '0px', color: Colours.text }}
          />
        </div>
      </div>
      <div
        css={`
          width: calc(100% - 20px);
          padding: 10px;
          overflow-y: auto;
          background: ${Colours.foreground};
        `}
      >
        {children}
      </div>
    </div>
  )
}
