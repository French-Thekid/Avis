import React from 'react'
import 'styled-components/macro'

import { FormControl } from '../../../components'

export default function VehicleIdentification({
  value,
  setValue,
  suggestions,
  setSuggestions,
  dataSet,
  handleChange,
  updateDataSet,
}) {
  const {
    mileage: { value: mileage },
    nextMileage: { value: nextMileage },
    make: { value: make },
    model: { value: model },
    year: { value: year },
    // colour,
  } = dataSet || {}
  return (
    <FormControl.FieldSet>
      <FormControl.Legend>Vehicle Identification</FormControl.Legend>
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
        <section>
          <FormControl.Autofill
            value={value}
            setValue={setValue}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            updateDataSet={updateDataSet}
          />
        </section>
        <section>
          <FormControl.Input
            id="mileage"
            label="Current Mileage"
            placeholder="Current Mileage"
            name="mileage"
            type="number"
            onChange={(e) => handleChange({ value: e, key: 'mileage' })}
            value={mileage}
          />
        </section>
        <section>
          <FormControl.Input
            id="nextMileage"
            label="Next Service Mileage"
            placeholder="Next Service Mileage"
            name="nextMileage"
            type="number"
            onChange={(e) => handleChange({ value: e, key: 'nextMileage' })}
            value={nextMileage}
            max={6}
          />
          {/* <FormControl.Error
            show={false}
            message="Sample"
            
          /> */}
        </section>
        <section>
          <FormControl.Input
            id="make"
            label="Make"
            placeholder="Make"
            name="make"
            type="text"
            onChange={handleChange}
            value={make}
            disabled={true}
          />
          {/* <FormControl.Error
            show={false}
            message="Sample"
            
          /> */}
        </section>
        <section>
          <FormControl.Input
            id="model"
            label="Model"
            placeholder="Model"
            name="model"
            type="text"
            onChange={handleChange}
            value={model}
            disabled={true}
          />
          {/* <FormControl.Error
            show={false}
            message="Sample"
            
          /> */}
        </section>
        <section>
          <FormControl.Input
            id="year"
            label="Year"
            placeholder="Year"
            name="year"
            type="text"
            onChange={handleChange}
            value={year}
            disabled={true}
          />
          {/* <FormControl.Error
            show={false}
            message="Sample"
            
          /> */}
        </section>
        {/* <section>
          <FormControl.Input
            id="colour"
            label="Colour"
            placeholder="Colour"
            name="colour"
            type="text"
            onChange={handleChange}
            value={colour}
            disabled={true}
          /> */}
        {/* <FormControl.Error
            show={false}
            message="Sample"
            
          /> */}
        {/* </section> */}
      </div>
    </FormControl.FieldSet>
  )
}
