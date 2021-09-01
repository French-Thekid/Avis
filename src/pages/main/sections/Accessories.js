import React from 'react'
import 'styled-components/macro'

import { FormControl, Colours } from '../../../components'
import { Panel } from './DamageChecklist'

export default function InspectionChecklist({ dataSet, handleChange }) {
  const {
    mats: { value: mats },
    upholstery: { value: upholstery },
    sideMirror: { value: sideMirror },
    rims: { value: rims },
    hubcaps: { value: hubcaps },
    jacks: { value: jacks },
    lugTool: { value: lugTool },
  } = dataSet || {}

  const Pass = () => {
    let value =
      dataSet.upholstery.point +
      dataSet.sideMirror.point +
      dataSet.mats.point +
      dataSet.rims.point +
      dataSet.hubcaps.point +
      dataSet.jacks.point +
      dataSet.lugTool.point

    if (value === 7) return true

    return false
  }

  return (
    <FormControl.FieldSet
      borderColour={Pass() ? Colours.green : Colours.border}
    >
      <FormControl.Legend>Accessories</FormControl.Legend>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 20px;
        `}
      >
        <Panel
          label="Upholstery"
          value={upholstery}
          handleChange={handleChange}
          keyLabel="upholstery"
        />
        <Panel
          label="Mats"
          value={mats}
          handleChange={handleChange}
          keyLabel="mats"
        />
        <Panel
          label="Side Mirror"
          value={sideMirror}
          handleChange={handleChange}
          keyLabel="sideMirror"
        />
        <Panel
          label="Rims"
          value={rims}
          handleChange={handleChange}
          keyLabel="rims"
        />
        <Panel
          label="Hubcaps"
          value={hubcaps}
          handleChange={handleChange}
          keyLabel="hubcaps"
        />
        <Panel
          label="Jacks"
          value={jacks}
          handleChange={handleChange}
          keyLabel="jacks"
        />
        <Panel
          label="Lug Tool"
          value={lugTool}
          handleChange={handleChange}
          keyLabel="lugTool"
        />
      </div>
    </FormControl.FieldSet>
  )
}
