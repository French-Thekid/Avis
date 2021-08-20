import React from 'react'
import 'styled-components/macro'

import { FormControl } from '../../../components'

export default function Remark({ dataSet, handleChange }) {
  const {
    remark: { value },
  } = dataSet || {}
  return (
    <FormControl.FieldSet>
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
