import React from 'react'
import 'styled-components/macro'

import { FormControl } from '../../../components'
import { FuelLevels } from './VehicleIdentifications'

export default function VehicleIdentification({ dataSet, handleChange, out }) {
  const {
    mileageIn: { value: mileageIn },
    mileageOut: { value: mileageOut },
    fuelIn: { value: fuelIn },
    fuelOut: { value: fuelOut },
  } = dataSet || {}

  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Mileage/Fuel Checks</FormControl.Legend>
      <div
        css={`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;

          /* tablet portrait */
          @media screen and (max-width: 769px) {
            @media screen and (max-height: 1025px) {
              @media screen and (orientation: portrait) {
                grid-template-columns: repeat(3, 1fr);
              }
            }
          }
        `}
      >
        {!out && (
          <FormControl.Input
            id="mileageIn"
            label="Mileage In"
            placeholder="Mileage In"
            name="mileageIn"
            type="text"
            onChange={(e) => handleChange({ value: e, key: 'mileageIn' })}
            value={mileageIn}
          />
        )}
        <FormControl.Input
          id="mileageOut"
          label="Mileage Out"
          placeholder="Mileage Out"
          name="mileageOut"
          type="text"
          onChange={(e) => handleChange({ value: e, key: 'mileageOut' })}
          value={mileageOut}
          disabled={!out}
        />
        {!out && (
          <FormControl.Select
            value={fuelIn}
            groups={FuelLevels}
            label="Fuel In"
            name="fuelIn"
            handlechange={(e) => handleChange({ value: e, key: 'fuelIn' })}
          />
        )}
        <FormControl.Select
          value={fuelOut}
          groups={FuelLevels}
          label="Fuel Out"
          name="fuelOut"
          handlechange={(e) => handleChange({ value: e, key: 'fuelOut' })}
          disabled={!out}
        />
      </div>
    </FormControl.FieldSet>
  )
}
