import React, { useState, useRef } from 'react'
import 'styled-components/macro'
import { useDialog } from '../../../hooks'
import { Colours, Core, Layout } from '../../../components'
import SignatureCanvas from 'react-signature-canvas'

export default function AddSignature({
  close,
  title = 'Add Signature',
  setSignature,
}) {
  const { Dialog } = useDialog()
  const [empty, setEnpty] = useState(false)

  const sigCanvas = useRef({})
  const Clear = () => {
    sigCanvas.current.clear()
  }

  const Save = () => {
    if (sigCanvas.current.isEmpty()) {
      setEnpty(true)
    } else {
      setSignature({
        value: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
        key: 'renterInSignature',
      })
      close()
    }
  }

  return (
    <Layout.Container>
      <Dialog open={true}>
        <Layout.CustomCard title={title} close={close} minWidth="450px">
          <Core.Text size="18px" color={Colours.input}>
            Please enter your signature below
          </Core.Text>
          <div
            css={`
              display: grid;
              grid-template-rows: max-content max-content;
              grid-gap: 20px;
              margin-top: 10px;
            `}
          >
            <div
              css={`
                border: ${empty
                  ? `1px solid ${Colours.red}`
                  : `1px solid ${Colours.blue}`};
                border-radius: 5px;
                padding: 2px;
                -webkit-box-shadow: 0px 0px 33px -8px rgba(230, 230, 230, 1);
                -moz-box-shadow: 0px 0px 33px -8px rgba(230, 230, 230, 1);
                box-shadow: 0px 0px 33px -8px rgba(230, 230, 230, 1);
              `}
            >
              <SignatureCanvas
                penColor="#4756a1"
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: 'sigCanvas',
                }}
                ref={sigCanvas}
                onEnd={() => {
                  if (empty === true) setEnpty(false)
                }}
              />
            </div>
            <div
              css={`
                display: grid;
                grid-template-columns: max-content 1fr max-content;
              `}
            >
              <Core.Button onClick={Clear} width="150px">
                Clear
              </Core.Button>
              <div />
              <Core.Button onClick={Save} width="150px">
                Done
              </Core.Button>
            </div>
          </div>
        </Layout.CustomCard>
      </Dialog>
    </Layout.Container>
  )
}
