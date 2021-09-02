import React from 'react'
import 'styled-components/macro'

import { FormControl, Colours } from '../../../components'

export default function VehicleIdentification({
  value,
  setValue,
  suggestions,
  setSuggestions,
  dataSet,
  handleChange,
  updateDataSet,
  out,
  setFetching,
  fetchData,
}) {
  const {
    make: { value: make },
    model: { value: model },
    year: { value: year },
  } = dataSet || {}

  return (
    <FormControl.FieldSet
      borderColour={dataSet.model.point === 1 ? Colours.green : Colours.border}
    >
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
        <FormControl.Autofill
          value={value}
          setValue={setValue}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          updateDataSet={updateDataSet}
          setFetching={setFetching}
          out={out}
          fetchData={fetchData}
        />

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
      </div>
    </FormControl.FieldSet>
  )
}
