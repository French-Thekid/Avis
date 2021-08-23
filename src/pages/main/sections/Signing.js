import React from 'react'
import { useHistory } from 'react-router-dom'
import 'styled-components/macro'

import { Colours, Core, FormControl, Icons } from '../../../components'

export default function InspectionChecklist({ dataSet, handleChange }) {
  const {
    renterIn: { value: renterIn },
    renterOut: { value: renterOut },
    renterInSignature: { value: renterInSignature },
    renterOutSignature: { value: renterOutSignature },
  } = dataSet || {}

  const history = useHistory()

  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Signing</FormControl.Legend>
      <Core.Text size="14px" color={Colours.input}>
        I ACKNOWLEDGE THAT I HAVE EXAMMINED THE CAR AND THE ABOVE INFORMATION IS
        CORRECT. I UNDERSTAND THAT A CLEANING FEE MAY APPLY FOR SMOKING IN THE
        VEHICLE
      </Core.Text>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 20px;
          grid-row-gap: 10px;
          margin-top: 30px;
        `}
      >
        <div
          css={`
            display: grid;
            grid-gap: 10px;
          `}
        >
          <FormControl.Input
            id="renterOut"
            label="Renter Out"
            placeholder="Renter Out"
            name="renterOut"
            type="text"
            onChange={(e) => handleChange({ value: e, key: 'renterOut' })}
            value={renterOut}
            disabled={renterIn !== ''}
          />
          <div
            css={`
              display: grid;
              grid-gap: 10px;
              align-items: center;
              grid-template-columns: ${renterOutSignature === ''
                ? 'max-content'
                : 'max-content max-content'};
            `}
          >
            <Core.Button
              width="150px"
              onClick={() => history.push('?action=renterOutSignature')}
              bgColour={
                renterOutSignature === ''
                  ? `linear-gradient(180deg, rgba(120,143,255,1) 0%, rgba(53,84,238,1) 100%)`
                  : `linear-gradient(180deg, rgba(103,244,116,1) 0%, rgba(20,154,36,1) 100%)`
              }
              disabled={renterOut === ''}
            >
              {renterOutSignature === '' ? 'Add Signature' : 'Change Signature'}
            </Core.Button>
            {renterOutSignature !== '' && (
              <Icons.CheckCircleRoundedIcon
                style={{ color: Colours.green, fontSize: '30px' }}
              />
            )}
          </div>
        </div>
        <div
          css={`
            display: grid;
            grid-gap: 10px;
          `}
        >
          <FormControl.Input
            id="renterIn"
            label="Renter In"
            placeholder="Renter In"
            name="renterIn"
            type="text"
            onChange={(e) => handleChange({ value: e, key: 'renterIn' })}
            value={renterIn}
            disabled={renterOut !== ''}
          />
          <div
            css={`
              display: grid;
              grid-gap: 10px;
              align-items: center;
              grid-template-columns: ${renterInSignature === ''
                ? 'max-content'
                : 'max-content max-content'};
            `}
          >
            <Core.Button
              onClick={() => history.push('?action=renterInSignature')}
              width="150px"
              bgColour={
                renterInSignature === ''
                  ? `linear-gradient(180deg, rgba(120,143,255,1) 0%, rgba(53,84,238,1) 100%)`
                  : `linear-gradient(180deg, rgba(103,244,116,1) 0%, rgba(20,154,36,1) 100%)`
              }
              disabled={renterIn === ''}
            >
              {renterInSignature === '' ? 'Add Signature' : 'Change Signature'}
            </Core.Button>
            {renterInSignature !== '' && (
              <Icons.CheckCircleRoundedIcon
                style={{ color: Colours.green, fontSize: '30px' }}
              />
            )}
          </div>
        </div>
      </div>
    </FormControl.FieldSet>
  )
}
