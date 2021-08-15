import React, { useState } from 'react'
import 'styled-components/macro'

import {
  VehicleIdentification,
  InspectionChecklist,
  Completion,
  InspectionNotes,
} from './sections'

export default function NewReport() {
  const [dataSet, updateDataSet] = useState({
    mileage: { value: '', point: 0 },
    nextMileage: { value: '', point: 0 },
    make: { value: '', point: 0 },
    model: { value: '', point: 0 },
    year: { value: '', point: 0 },
    note: { value: '', point: 0 },
  })

  const [checkList, updateChecklist] = useState({
    engineOil: { status: '', quantity: '', point: 0 },
    oilFilter: { status: '', quantity: '', point: 0 },
    airFilter: { status: '', quantity: '', point: 0 },
    sparksPlug: { status: '', quantity: '', point: 0 },
    battery: { status: '', quantity: '', point: 0 },
    brakeFluid: { status: '', quantity: '', point: 0 },
    brakeShoe: { status: '', quantity: '', point: 0 },
    discPadFront: { status: '', quantity: '', point: 0 },
    discPadBack: { status: '', quantity: '', point: 0 },
    fuelFilter: { status: '', quantity: '', point: 0 },
    cabinFilter: { status: '', quantity: '', point: 0 },
    transmission: { status: '', quantity: '', point: 0 },
    tyre: { status: '', quantity: '', point: 0 },
  })

  const [license, setLicense] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const licensePoint = license.length === 6 && dataSet.model.point === 1 ? 1 : 0

  const count =
    dataSet.mileage.point +
    dataSet.nextMileage.point +
    dataSet.make.point +
    dataSet.model.point +
    dataSet.year.point +
    dataSet.note.point +
    checkList.engineOil.point +
    checkList.oilFilter.point +
    checkList.airFilter.point +
    checkList.sparksPlug.point +
    checkList.battery.point +
    checkList.brakeFluid.point +
    checkList.brakeShoe.point +
    checkList.discPadFront.point +
    checkList.discPadBack.point +
    checkList.fuelFilter.point +
    checkList.cabinFilter.point +
    checkList.transmission.point +
    checkList.tyre.point +
    licensePoint

  const score = (count / 20) * 100

  const handleChange = ({ value, key }) => {
    switch (key) {
      case 'mileage':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            mileage: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'nextMileage':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            nextMileage: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'note':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            note: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break

      default:
        console.log('Nah')
        break
    }
  }

  const handleChecklist = ({ status, quantity, key }) => {
    switch (key) {
      case 'engineOil':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              engineOil: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              engineOil: {
                status: status,
                quantity: prevState.engineOil.quantity,
                point:
                  prevState.engineOil.quantity !== '' &&
                  prevState.engineOil.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'engineOilQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              engineOil: {
                status: prevState.engineOil.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'oilFilter':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              oilFilter: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              oilFilter: {
                status: status,
                quantity: prevState.oilFilter.quantity,
                point:
                  prevState.oilFilter.quantity !== '' &&
                  prevState.oilFilter.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'oilFilterQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              oilFilter: {
                status: prevState.oilFilter.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'airFilter':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              airFilter: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              airFilter: {
                status: status,
                quantity: prevState.airFilter.quantity,
                point:
                  prevState.airFilter.quantity !== '' &&
                  prevState.airFilter.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'airFilterQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              airFilter: {
                status: prevState.airFilter.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'sparksPlug':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              sparksPlug: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              sparksPlug: {
                status: status,
                quantity: prevState.sparksPlug.quantity,
                point:
                  prevState.sparksPlug.quantity !== '' &&
                  prevState.sparksPlug.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'sparksPlugQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              sparksPlug: {
                status: prevState.sparksPlug.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'battery':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              battery: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              battery: {
                status: status,
                quantity: prevState.battery.quantity,
                point:
                  prevState.battery.quantity !== '' &&
                  prevState.battery.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'batteryQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              battery: {
                status: prevState.battery.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'brakeFluid':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              brakeFluid: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              brakeFluid: {
                status: status,
                quantity: prevState.brakeFluid.quantity,
                point:
                  prevState.brakeFluid.quantity !== '' &&
                  prevState.brakeFluid.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'brakeFluidQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              brakeFluid: {
                status: prevState.brakeFluid.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'brakeShoe':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              brakeShoe: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              brakeShoe: {
                status: status,
                quantity: prevState.brakeShoe.quantity,
                point:
                  prevState.brakeShoe.quantity !== '' &&
                  prevState.brakeShoe.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'brakeShoeQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              brakeShoe: {
                status: prevState.brakeShoe.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'discPadFront':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              discPadFront: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              discPadFront: {
                status: status,
                quantity: prevState.discPadFront.quantity,
                point:
                  prevState.discPadFront.quantity !== '' &&
                  prevState.discPadFront.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'discPadFrontQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              discPadFront: {
                status: prevState.discPadFront.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'discPadBack':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              discPadBack: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              discPadBack: {
                status: status,
                quantity: prevState.discPadBack.quantity,
                point:
                  prevState.discPadBack.quantity !== '' &&
                  prevState.discPadBack.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'discPadBackQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              discPadBack: {
                status: prevState.discPadBack.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'fuelFilter':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              fuelFilter: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              fuelFilter: {
                status: status,
                quantity: prevState.fuelFilter.quantity,
                point:
                  prevState.fuelFilter.quantity !== '' &&
                  prevState.fuelFilter.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'fuelFilterQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              fuelFilter: {
                status: prevState.fuelFilter.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'cabinFilter':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              cabinFilter: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              cabinFilter: {
                status: status,
                quantity: prevState.cabinFilter.quantity,
                point:
                  prevState.cabinFilter.quantity !== '' &&
                  prevState.cabinFilter.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'cabinFilterQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              cabinFilter: {
                status: prevState.cabinFilter.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'transmission':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              transmission: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              transmission: {
                status: status,
                quantity: prevState.transmission.quantity,
                point:
                  prevState.transmission.quantity !== '' &&
                  prevState.transmission.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'transmissionQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              transmission: {
                status: prevState.transmission.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'tyre':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              tyre: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              tyre: {
                status: status,
                quantity: prevState.tyre.quantity,
                point:
                  prevState.tyre.quantity !== '' && prevState.tyre.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'tyreQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              tyre: {
                status: prevState.tyre.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      default:
        console.log('Nah')
        break
    }
  }

  return (
    <div
      css={`
        display: grid;
        grid-template-rows: max-content 1fr;
        height: 100%;
        overflow-y: auto;
      `}
    >
      <Completion score={score} />

      <div
        css={`
          overflow-y: auto;
        `}
      >
        <VehicleIdentification
          value={license}
          setValue={setLicense}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          dataSet={dataSet}
          handleChange={handleChange}
          updateDataSet={updateDataSet}
        />
        <Gap />
        <InspectionChecklist
          checkList={checkList}
          updateChecklist={updateChecklist}
          handleChecklist={handleChecklist}
        />
        <Gap />
        <InspectionNotes dataSet={dataSet} handleChange={handleChange} />
      </div>
    </div>
  )
}

const Gap = () => (
  <div
    css={`
      height: 30px;
    `}
  />
)
