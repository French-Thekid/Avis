import React from 'react'
import 'styled-components/macro'

import { FormControl } from '../../../components'

export default function InspectionChecklist({ dataSet, handleChange }) {
  const {
    tyreLeftFront: { value: tyreLeftFront },
    tyreRightFront: { value: tyreRightFront },
    tyreLeftRear: { value: tyreLeftRear },
    tyreRightRear: { value: tyreRightRear },
    spear: { value: spear },
  } = dataSet || {}

  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Tyres</FormControl.Legend>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 20px;
          grid-row-gap: 10px;
        `}
      >
        <FormControl.Input
          id="tyreLeftFront"
          label="Left Front"
          placeholder="Left Front"
          name="tyreLeftFront"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'tyreLeftFront' })}
          value={tyreLeftFront}
        />
        <FormControl.Input
          id="tyreRightFront"
          label="Right Front"
          placeholder="Right Front"
          name="tyreRightFront"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'tyreRightFront' })}
          value={tyreRightFront}
        />
        <FormControl.Input
          id="tyreLeftRear"
          label="Left Rear"
          placeholder="Left Rear"
          name="tyreLeftRear"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'tyreLeftRear' })}
          value={tyreLeftRear}
        />
        <FormControl.Input
          id="tyreRightRear"
          label="Right Rear"
          placeholder="Right Rear"
          name="tyreRightRear"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'tyreRightRear' })}
          value={tyreRightRear}
        />
        <FormControl.Input
          id="spear"
          label="Spear"
          placeholder="Spear"
          name="spear"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'spear' })}
          value={spear}
        />
      </div>
    </FormControl.FieldSet>
  )
}
