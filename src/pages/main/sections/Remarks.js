import React from 'react'
import 'styled-components/macro'

import { FormControl, Colours } from '../../../components'

export default function Remark({ dataSet, handleChange }) {
  const {
    remark: { value },
  } = dataSet || {}
  return (
    <FormControl.FieldSet
      borderColour={dataSet.remark.point === 1 ? Colours.green : Colours.border}
    >
      <FormControl.Legend>Remark</FormControl.Legend>
      <section>
        <FormControl.Input
          id="remark"
          label="Remark"
          placeholder="Remark"
          name="remark"
          type="text"
          multiline
          rows={6}
          onChange={(e) => handleChange({ value: e, key: 'remark' })}
          value={value}
          disabled={true}
        />
      </section>
    </FormControl.FieldSet>
  )
}
