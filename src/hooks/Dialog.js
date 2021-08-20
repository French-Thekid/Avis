import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'styled-components/macro'
import useOnClickOutside from './useOnClickOutside'

export default function Dialog(props) {
  const ref = useRef()
  useOnClickOutside(ref, () => props.close || null)
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'initial'
    }
  }, [])

  if (!props.open) return null
  return ReactDOM.createPortal(
    <div initial="hidden" animate="visible">
      <DialogBackground>
        <div initial="hidden" animate="visible">
          {props.children}
        </div>
      </DialogBackground>
    </div>,
    document.getElementById('portal')
  )
}

const DialogBackground = ({ children }) => (
  <div
    css={`
      position: absolute;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      justify-items: center;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: 100;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(5px);
    `}
  >
    {children}
  </div>
)
