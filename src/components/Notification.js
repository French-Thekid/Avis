import React from 'react'
import Transition from 'react-transition-group/Transition'
import 'styled-components/macro'
import Colours from './Colours'

const duration = 300

const defaultStyle = {
  position: 'fixed',
  top: '10px',
  right: '-460px',
  zIndex: '1000',
}

const transitionStyles = {
  entered: {
    transform: 'translateX(-100%)',
    transition: `transform ${duration}ms ease-in-out`,
  },
  exiting: {
    transform: 'translateX(100%)',
    transition: `transform ${duration}ms ease-in-out`,
  },
  exited: {
    right: '-270px',
  },
}

const P = ({ size = '16px', weight = 500, children }) => (
  <p
    css={`
      padding: 0px;
      margin: 0px;
      font-size: ${size};
      font-weight: ${weight};
    `}
  >
    {children}
  </p>
)
const Notification = ({
  notification,
  title = 'Request Successful!',
  subject = 'Success',
  message = '',
  setcompleted,
  warning,
}) => {
  return (
    <Transition in={notification} timeout={duration} unmountOnExit>
      {(state) => (
        <div
          css={`
            background: rgba(0, 0, 0, 0.65);
            margin: 0px;
            backdrop-filter: blur(3px);
            border-left: ${warning
              ? `8px solid ${Colours.red}`
              : `8px solid ${Colours.blue}`};
            color: white;
            padding: 20px;
          `}
          onClick={() => setcompleted(false)}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div
            css={`
              height: max-content;
              width: 420px;
              padding: 0px;
              display: grid;
              grid-template-rows: max-content max-content 1fr max-content;
              grid-row-gap: 10px;
              align-items: start;
            `}
          >
            <P>{title}</P>
            <P>{subject}</P>
            <P size="14px" weight="100">
              {message}
            </P>
            <P size="12px" weight="100">
              {new Date().toString()}
            </P>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Notification
