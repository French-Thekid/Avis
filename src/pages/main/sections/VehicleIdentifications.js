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
  validate,
  checkList,
}) {
  const {
    mileage: { value: mileage },
    nextMileage: { value: nextMileage, point: mileagePoint },
    make: { value: make },
    model: { value: model },
    year: { value: year },
    fuel: { value: fuel },
    colour: { value: colour },
  } = dataSet || {}

  const Pass = () => {
    let value =
      dataSet.mileage.point +
      dataSet.nextMileage.point +
      dataSet.fuel.point +
      dataSet.model.point

    if (value === 4) return true

    return false
  }

  const airfilterCheck = () => {
    if (checkList.airFilter.status === 'Pass') return 1
    if (
      checkList.airFilter.status === 'Fail' &&
      checkList.airFilter.point === 1 &&
      dataSet.airFilterPhoto.point === 1
    )
      return 1
    return 0
  }
  const dicsPadFrontCheck = () => {
    if (checkList.discPadFront.status === 'Pass') return 1
    if (
      checkList.discPadFront.status === 'Fail' &&
      checkList.discPadFront.point === 1 &&
      dataSet.discPadsFrontPhoto.point === 1
    )
      return 1
    return 0
  }
  const dicsPadBackCheck = () => {
    if (checkList.discPadBack.status === 'Pass') return 1
    if (
      checkList.discPadBack.status === 'Fail' &&
      checkList.discPadBack.point === 1 &&
      dataSet.discPadsRearPhoto.point === 1
    )
      return 1
    return 0
  }
  const frontTyreLeftCheck = () => {
    if (checkList.frontTyreLeft.status === 'Pass') return 1
    if (
      checkList.frontTyreLeft.status === 'Fail' &&
      checkList.frontTyreLeft.point === 1 &&
      dataSet.frontTyreLeftPhoto.point === 1
    )
      return 1
    return 0
  }
  const frontTyreRightCheck = () => {
    if (checkList.frontTyreRight.status === 'Pass') return 1
    if (
      checkList.frontTyreRight.status === 'Fail' &&
      checkList.frontTyreRight.point === 1 &&
      dataSet.frontTyreRightPhoto.point === 1
    )
      return 1
    return 0
  }
  const rearTyreLeftCheck = () => {
    if (checkList.rearTyreLeft.status === 'Pass') return 1
    if (
      checkList.rearTyreLeft.status === 'Fail' &&
      checkList.rearTyreLeft.point === 1 &&
      dataSet.rearTyreLeftPhoto.point === 1
    )
      return 1
    return 0
  }
  const rearTyreRightCheck = () => {
    if (checkList.rearTyreRight.status === 'Pass') return 1
    if (
      checkList.rearTyreRight.status === 'Fail' &&
      checkList.rearTyreRight.point === 1 &&
      dataSet.rearTyreRightPhoto.point === 1
    )
      return 1
    return 0
  }

  const MissingCheck = () => {
    let value =
      checkList.engineOil.point +
      checkList.oilFilter.point +
      airfilterCheck() +
      checkList.sparksPlug.point +
      checkList.battery.point +
      checkList.brakeFluid.point +
      checkList.brakeShoe.point +
      dicsPadFrontCheck() +
      dicsPadBackCheck() +
      checkList.fuelFilter.point +
      checkList.cabinFilter.point +
      checkList.transmission.point +
      frontTyreLeftCheck() +
      frontTyreRightCheck() +
      rearTyreLeftCheck() +
      rearTyreRightCheck()

    if (value > 0 && !Pass()) return true

    return false
  }

  return (
    <FormControl.FieldSet
      borderColour={
        MissingCheck() ? Colours.red : Pass() ? Colours.green : Colours.border
      }
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
        />

        <FormControl.Input
          id="mileage"
          label="Current Mileage"
          placeholder="Current Mileage"
          name="mileage"
          type="number"
          onChange={(e) => handleChange({ value: e, key: 'mileage' })}
          value={mileage}
        />

        <FormControl.Input
          id="nextMileage"
          label="Next Service Mileage"
          placeholder="Next Service Mileage"
          name="nextMileage"
          type="number"
          onChange={(e) => handleChange({ value: e, key: 'nextMileage' })}
          value={nextMileage}
          max={6}
          error={
            mileagePoint === 1 &&
            validate({ current: mileage, next: nextMileage })
          }
        />

        <FormControl.Select
          value={fuel}
          groups={FuelLevels}
          label="Fuel Meter"
          name="fuel"
          handlechange={(e) => handleChange({ value: e, key: 'fuel' })}
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

        <FormControl.Input
          id="colour"
          label="Colour"
          placeholder="Colour"
          name="colour"
          type="text"
          onChange={handleChange}
          value={colour}
          disabled={true}
        />
      </div>
    </FormControl.FieldSet>
  )
}

export const FuelLevels = [
  { label: 'E', value: 'E' },
  { label: '1/4', value: '1/4' },
  { label: '3/8', value: '3/8' },
  { label: '1/2', value: '1/2' },
  { label: '5/8', value: '5/8' },
  { label: '3/4', value: '3/4' },
  { label: '7/8', value: '7/8' },
  { label: 'F', value: 'F' },
]
