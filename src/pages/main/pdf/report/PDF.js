import { PDFViewer } from '@react-pdf/renderer'
import { Colours } from '../../../../components'
import React from 'react'
import MyDocument from './Document'
import 'styled-components/macro'

export default function PDF() {
  return (
    <div
      css={`
        height: 100%;
      `}
    >
      <PDFViewer
        css={`
          height: calc(100% - 2px);
          width: calc(100% - 2px);
          border-radius: 5px;
          border: 1px solid ${Colours.border};
        `}
      >
        <MyDocument />
      </PDFViewer>
    </div>
  )
}
