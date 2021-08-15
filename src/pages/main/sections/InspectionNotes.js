import React from 'react'
import 'styled-components/macro'

import { FormControl } from '../../../components'

export default function VehicleIdentification({ dataSet, handleChange }) {
  const {
    note: { value },
  } = dataSet || {}
  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Inspection Notes</FormControl.Legend>
      <section>
        <FormControl.Input
          id="note"
          label="Inspection Note"
          placeholder="Inspection Note"
          name="note"
          type="text"
          multiline
          rows={6}
          onChange={(e) => handleChange({ value: e, key: 'note' })}
          value={value}
          disabled={true}
        />
        {/* <FormControl.Error show={false} message="Sample" /> */}
      </section>
    </FormControl.FieldSet>
  )
}
