import React from 'react'
import 'styled-components/macro'

import { Core, FormControl, Colours } from '../../../components'

export default function InspectionChecklist({ dataSet, handleChange }) {
  const {
    frontDoorLeft: { value: frontDoorLeft },
    frontDoorRight: { value: frontDoorRight },
    front: { value: front },
    roof: { value: roof },
    rearDoorLeft: { value: rearDoorLeft },
    rear: { value: rear },
    frontFenderLeft: { value: frontFenderLeft },
    rearDoorRight: { value: rearDoorRight },
    frontWheelLeft: { value: frontWheelLeft },
    frontFenderRight: { value: frontFenderRight },
    frontWheelRight: { value: frontWheelRight },
    rearFenderLeft: { value: rearFenderLeft },
    rearFenderRight: { value: rearFenderRight },
    rearWheelLeft: { value: rearWheelLeft },
    rearWheelRight: { value: rearWheelRight },
    doorRear: { value: doorRear },
    runningBoardLeft: { value: runningBoardLeft },
    runningBoardRight: { value: runningBoardRight },
    frontWindowLeft: { value: frontWindowLeft },
    frontWindowRight: { value: frontWindowRight },
    rearWindowLeft: { value: rearWindowLeft },
    rearWindowRight: { value: rearWindowRight },
    windshield: { value: windshield },
    rearGlass: { value: rearGlass },
  } = dataSet || {}

  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Damage Checklist</FormControl.Legend>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 20px;
        `}
      >
        <Panel
          label="Roof"
          value={roof}
          handleChange={handleChange}
          keyLabel="roof"
        />
        <Panel
          label="Front"
          value={front}
          handleChange={handleChange}
          keyLabel="front"
        />
        <Panel
          label="Rear"
          value={rear}
          handleChange={handleChange}
          keyLabel="rear"
        />
        <Panel
          label="Door (Rear)"
          value={doorRear}
          handleChange={handleChange}
          keyLabel="doorRear"
        />
        <Panel
          label="Front Door (Left)"
          value={frontDoorLeft}
          handleChange={handleChange}
          keyLabel="frontDoorLeft"
        />
        <Panel
          label="Front Door (Right)"
          value={frontDoorRight}
          handleChange={handleChange}
          keyLabel="frontDoorRight"
        />

        <Panel
          label="Rear Door (Left)"
          value={rearDoorLeft}
          handleChange={handleChange}
          keyLabel="rearDoorLeft"
        />
        <Panel
          label="Rear Door (Right)"
          value={rearDoorRight}
          handleChange={handleChange}
          keyLabel="rearDoorRight"
        />
        <Panel
          label="Front Fender (Left)"
          value={frontFenderLeft}
          handleChange={handleChange}
          keyLabel="frontFenderLeft"
        />

        <Panel
          label="Front Fender (Right)"
          value={frontFenderRight}
          handleChange={handleChange}
          keyLabel="frontFenderRight"
        />
        <Panel
          label="Rear Fender (Left)"
          value={rearFenderLeft}
          handleChange={handleChange}
          keyLabel="rearFenderLeft"
        />
        <Panel
          label="Rear Fender (Right)"
          value={rearFenderRight}
          handleChange={handleChange}
          keyLabel="rearFenderRight"
        />
        <Panel
          label="Front Wheel (Left)"
          value={frontWheelLeft}
          handleChange={handleChange}
          keyLabel="frontWheelLeft"
        />

        <Panel
          label="Front Wheel (Right)"
          value={frontWheelRight}
          handleChange={handleChange}
          keyLabel="frontWheelRight"
        />

        <Panel
          label="Rear Wheel (Left)"
          value={rearWheelLeft}
          handleChange={handleChange}
          keyLabel="rearWheelLeft"
        />

        <Panel
          label="Rear Wheel (Right)"
          value={rearWheelRight}
          handleChange={handleChange}
          keyLabel="rearWheelRight"
        />
        <Panel
          label="Running Board (Left)"
          value={runningBoardLeft}
          handleChange={handleChange}
          keyLabel="runningBoardLeft"
        />
        <Panel
          label="Running Board (Right)"
          value={runningBoardRight}
          handleChange={handleChange}
          keyLabel="runningBoardRight"
        />
        <Panel
          label="Front Window (Left)"
          value={frontWindowLeft}
          handleChange={handleChange}
          keyLabel="frontWindowLeft"
        />
        <Panel
          label="Front Window (Right)"
          value={frontWindowRight}
          handleChange={handleChange}
          keyLabel="frontWindowRight"
        />
        <Panel
          label="Rear Window (Left)"
          value={rearWindowLeft}
          handleChange={handleChange}
          keyLabel="rearWindowLeft"
        />
        <Panel
          label="Rear Window (Right)"
          value={rearWindowRight}
          handleChange={handleChange}
          keyLabel="rearWindowRight"
        />
        <Panel
          label="Windshield"
          value={windshield}
          handleChange={handleChange}
          keyLabel="windshield"
        />
        <Panel
          label="Rear Glass"
          value={rearGlass}
          handleChange={handleChange}
          keyLabel="rearGlass"
        />
      </div>
    </FormControl.FieldSet>
  )
}

export const Panel = ({ value, label, keyLabel, handleChange }) => {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 1fr max-content 143px;
        grid-gap: 20px;
        align-items: center;
        border: 1px solid ${Colours.border};
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;
      `}
    >
      <Core.Text color={Colours.blue} size="14px">
        {label}
      </Core.Text>

      <div
        css={`
          border-left: 1px solid ${Colours.border};
          height: 100%;
        `}
      />
      <section>
        <FormControl.Select
          value={value}
          groups={Conditions}
          label="Condition"
          name={value}
          handlechange={(e) => handleChange({ value: e, key: keyLabel })}
        />
      </section>
    </div>
  )
}

export const Conditions = [
  { label: 'Minor (1)', value: 1 },
  { label: 'Excessive (2)', value: 2 },
  { label: 'Surface (3)', value: 3 },
  { label: 'Paint (4)', value: 4 },
  { label: 'OK (5)', value: 5 },
  { label: 'Cracked (6)', value: 6 },
]
