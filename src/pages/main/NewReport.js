import React, { useState } from 'react'
import 'styled-components/macro'
import { Loading, Notification } from '../../components'
import {
  VehicleIdentification,
  InspectionChecklist,
  Completion,
  InspectionNotes,
} from './sections'
import SendEnail from './SendEmail'
import MyDocument from './pdf/report/Document'
import { pdf } from '@react-pdf/renderer'

export default function NewReport() {
  const [completed, setcompleted] = useState(false)
  const [completed1, setcompleted1] = useState(false)
  const [completed2, setcompleted2] = useState(false)
  const [loading, setloading] = useState(false)

  const showNotification = () => {
    setcompleted(true)
    setTimeout(() => {
      setcompleted(false)
    }, 8000)
  }
  const showNotificationValidation = () => {
    setcompleted1(true)
    setTimeout(() => {
      setcompleted1(false)
    }, 8000)
  }
  const showNotificationFailed = () => {
    setcompleted2(true)
    setTimeout(() => {
      setcompleted2(false)
    }, 8000)
  }

  //State Management
  const [dataSet, updateDataSet] = useState({
    mileage: { value: '', point: 0 },
    nextMileage: { value: '', point: 0 },
    make: { value: '', point: 0 },
    model: { value: '', point: 0 },
    year: { value: '', point: 0 },
    fuel: { value: '', point: 0 },
    colour: { value: '', point: 0 },
    note: { value: '', point: 0 },
    airFilterPhoto: { value: '', point: 0 },
    discPadsFrontPhoto: { value: '', point: 0 },
    discPadsRearPhoto: { value: '', point: 0 },
    frontTyreLeftPhoto: { value: '', point: 0 },
    frontTyreRightPhoto: { value: '', point: 0 },
    rearTyreLeftPhoto: { value: '', point: 0 },
    rearTyreRightPhoto: { value: '', point: 0 },
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
    frontTyreLeft: { status: '', quantity: '', point: 0 },
    frontTyreRight: { status: '', quantity: '', point: 0 },
    rearTyreLeft: { status: '', quantity: '', point: 0 },
    rearTyreRight: { status: '', quantity: '', point: 0 },
  })

  const [license, setLicense] = useState('')
  const [suggestions, setSuggestions] = useState([])

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

  //Completion
  const licensePoint = license.length === 6 && dataSet.model.point === 1 ? 1 : 0
  const count =
    dataSet.mileage.point +
    dataSet.nextMileage.point +
    dataSet.make.point +
    dataSet.model.point +
    dataSet.year.point +
    dataSet.note.point +
    dataSet.colour.point +
    dataSet.fuel.point +
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
    rearTyreRightCheck() +
    licensePoint

  const score = ((count / 25) * 100) >> 0

  const validate = ({ current, next }) => {
    if (parseInt(next) - parseInt(current) > 0) return false
    return true
  }

  //Clean Up
  const cleanUp = () => {
    updateChecklist({
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
      frontTyreLeft: { status: '', quantity: '', point: 0 },
      frontTyreRight: { status: '', quantity: '', point: 0 },
      rearTyreLeft: { status: '', quantity: '', point: 0 },
      rearTyreRight: { status: '', quantity: '', point: 0 },
    })
    updateDataSet({
      mileage: { value: '', point: 0 },
      nextMileage: { value: '', point: 0 },
      make: { value: '', point: 0 },
      model: { value: '', point: 0 },
      year: { value: '', point: 0 },
      note: { value: '', point: 0 },
      fuel: { value: '', point: 0 },
      colour: { value: '', point: 0 },
      airFilterPhoto: { value: '', point: 0 },
      discPadsFrontPhoto: { value: '', point: 0 },
      discPadsRearPhoto: { value: '', point: 0 },
      frontTyreLeftPhoto: { value: '', point: 0 },
      frontTyreRightPhoto: { value: '', point: 0 },
      rearTyreLeftPhoto: { value: '', point: 0 },
      rearTyreRightPhoto: { value: '', point: 0 },
    })
    setLicense('')
  }
  //HandleSubmission
  const HandleSubmission = async (e) => {
    e.preventDefault()
    if (
      score < 100 ||
      validate({
        current: dataSet.mileage.value,
        next: dataSet.nextMileage.value,
      })
    ) {
      showNotificationValidation()
    } else {
      setloading(true)
      console.log('Submitting')
      //Preparing Data for email template
      const assignee = localStorage.getItem('LoggedInUser')
      const date = new Date().toDateString()
      const year = dataSet.year.value
      const make = dataSet.make.value
      const model = dataSet.model.value
      const mileage = dataSet.mileage.value
      const nextMileage = dataSet.nextMileage.value
      const engineOilStatus = checkList.engineOil.status
      const engineOilQuantity = checkList.engineOil.quantity
      const oilFilterStatus = checkList.oilFilter.status
      const oilFilterQuantity = checkList.oilFilter.quantity
      const airFilterStatus = checkList.airFilter.status
      const airFilterQuantity = checkList.airFilter.quantity
      const sparksPlugStatus = checkList.sparksPlug.status
      const sparksPlugQuantity = checkList.sparksPlug.quantity
      const batteryStatus = checkList.battery.status
      const batteryQuantity = checkList.battery.quantity
      const brakeFluidStatus = checkList.brakeFluid.status
      const brakeFluidQuantity = checkList.brakeFluid.quantity
      const brakeShoeStatus = checkList.brakeShoe.status
      const brakeShoeQuantity = checkList.brakeShoe.quantity
      const discPadFrontStatus = checkList.discPadFront.status
      const discPadFrontQuantity = checkList.discPadFront.quantity
      const discPadBackStatus = checkList.discPadBack.status
      const discPadBackQuantity = checkList.discPadBack.quantity
      const fuelFilterStatus = checkList.fuelFilter.status
      const fuelFilterQuantity = checkList.fuelFilter.quantity
      const cabinFilterStatus = checkList.cabinFilter.status
      const cabinFilterQuantity = checkList.cabinFilter.quantity
      const transmissionStatus = checkList.transmission.status
      const transmissionQuantity = checkList.transmission.quantity
      const note = dataSet.note.value
      const colour = dataSet.colour.value
      const fuel = dataSet.fuel.value
      const airFilterPhoto = dataSet.airFilterPhoto.value
      const discPadsFrontPhoto = dataSet.discPadsFrontPhoto.value
      const discPadsRearPhoto = dataSet.discPadsRearPhoto.value
      const frontTyreLeftPhoto = dataSet.frontTyreLeftPhoto.value
      const frontTyreRightPhoto = dataSet.frontTyreRightPhoto.value
      const rearTyreLeftPhoto = dataSet.rearTyreLeftPhoto.value
      const rearTyreRightPhoto = dataSet.rearTyreRightPhoto.value
      const frontTyreLeft = checkList.frontTyreLeft.status
      const frontTyreLeftQuantity = checkList.frontTyreLeft.quantity
      const frontTyreRight = checkList.frontTyreRight.status
      const frontTyreRightQuantity = checkList.frontTyreRight.quantity
      const rearTyreLeft = checkList.rearTyreLeft.status
      const rearTyreLeftQuantity = checkList.rearTyreLeft.quantity
      const rearTyreRight = checkList.rearTyreRight.status
      const rearTyreRightQuantity = checkList.rearTyreRight.quantity

      const elements = {
        assignee,
        date,
        year,
        make,
        model,
        mileage,
        nextMileage,
        fuel,
        colour,
        license: license.toUpperCase(),
        engineOilStatus,
        engineOilQuantity,
        oilFilterStatus,
        oilFilterQuantity,
        airFilterStatus,
        airFilterQuantity,
        sparksPlugStatus,
        sparksPlugQuantity,
        batteryStatus,
        batteryQuantity,
        brakeFluidStatus,
        brakeFluidQuantity,
        brakeShoeStatus,
        brakeShoeQuantity,
        discPadFrontStatus,
        discPadFrontQuantity,
        discPadBackStatus,
        discPadBackQuantity,
        fuelFilterStatus,
        fuelFilterQuantity,
        cabinFilterStatus,
        cabinFilterQuantity,
        transmissionStatus,
        transmissionQuantity,
        note,
        airFilterPhoto,
        discPadsFrontPhoto,
        discPadsRearPhoto,
        frontTyreLeftPhoto,
        frontTyreRightPhoto,
        rearTyreLeftPhoto,
        rearTyreRightPhoto,
        frontTyreLeft,
        frontTyreLeftQuantity,
        frontTyreRight,
        frontTyreRightQuantity,
        rearTyreLeft,
        rearTyreLeftQuantity,
        rearTyreRight,
        rearTyreRightQuantity,
      }

      var reader = new FileReader()
      const doc = <MyDocument {...elements} />
      const asPdf = pdf([])
      asPdf.updateContainer(doc)
      const blob = await asPdf.toBlob()
      reader.readAsDataURL(blob)
      reader.onloadend = function () {
        var pdf = reader.result
        console.log(pdf)
        delete elements['engineOilPhoto']

        SendEnail({
          elements,
          setloading,
          showNotification,
          showNotificationFailed,
          cleanUp,
        })
      }
    }
  }

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
      case 'fuel':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            fuel: {
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
      case 'airFilterPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            airFilterPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'discPadsFrontPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            discPadsFrontPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'discPadsRearPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            discPadsRearPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontTyreLeftPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontTyreLeftPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontTyreRightPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontTyreRightPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearTyreLeftPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearTyreLeftPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearTyreRightPhoto':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearTyreRightPhoto: {
              value: value,
              point: value === '' ? 0 : 1,
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
                  prevState.airFilter.quantity > 0 &&
                  dataSet.airFilterPhoto.point > 0
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
                  prevState.discPadFront.quantity > 0 &&
                  dataSet.discPadsFrontPhoto.point > 0
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

      case 'frontTyreLeft':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              frontTyreLeft: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              frontTyreLeft: {
                status: status,
                quantity: prevState.frontTyreLeft.quantity,
                point:
                  prevState.frontTyreLeft.quantity !== '' &&
                  prevState.frontTyreLeft.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'frontTyreLeftQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              frontTyreLeft: {
                status: prevState.frontTyreLeft.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break

      case 'frontTyreRight':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              frontTyreRight: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              frontTyreRight: {
                status: status,
                quantity: prevState.frontTyreRight.quantity,
                point:
                  prevState.frontTyreRight.quantity !== '' &&
                  prevState.frontTyreRight.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'frontTyreRightQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              frontTyreRight: {
                status: prevState.frontTyreRight.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break
      case 'rearTyreLeft':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              rearTyreLeft: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              rearTyreLeft: {
                status: status,
                quantity: prevState.rearTyreLeft.quantity,
                point:
                  prevState.rearTyreLeft.quantity !== '' &&
                  prevState.rearTyreLeft.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'rearTyreLeftQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              rearTyreLeft: {
                status: prevState.rearTyreLeft.status,
                quantity: quantity,
                point: quantity !== '' && quantity > 0 ? 1 : 0,
              },
            }
          }
        })
        break
      case 'rearTyreRight':
        updateChecklist((prevState) => {
          if (status === 'Pass') {
            return {
              ...prevState,
              rearTyreRight: {
                status: status,
                quantity: '',
                point: 1,
              },
            }
          } else {
            return {
              ...prevState,
              rearTyreRight: {
                status: status,
                quantity: prevState.rearTyreRight.quantity,
                point:
                  prevState.rearTyreRight.quantity !== '' &&
                  prevState.rearTyreRight.quantity > 0
                    ? 1
                    : 0,
              },
            }
          }
        })
        break
      case 'rearTyreRightQuantity':
        updateChecklist((prevState) => {
          if (status === 'Fail') {
            return {
              ...prevState,
              rearTyreRight: {
                status: prevState.rearTyreRight.status,
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
      <Notification
        setcompleted={setcompleted}
        subject="Report Successfully Sent!"
        message="Your report will not be reviewed by your admin."
        notification={completed}
      />
      <Notification
        setcompleted={setcompleted1}
        title="Request Unsuccessful!"
        subject="Incomplete form!"
        message="Please ensure all fields are filled, then try again"
        notification={completed1}
        warning
      />
      <Notification
        setcompleted={setcompleted2}
        title="Request Unsuccessful!"
        subject="Submission Failed!"
        message="Please check your internet connection and try again"
        notification={completed2}
        warning
      />
      {loading && <Loading />}
      <Completion score={score} />
      <form
        id="submitForm"
        onSubmit={HandleSubmission}
        css={`
          display: none;
        `}
      />
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
          validate={validate}
        />
        <Gap />
        <InspectionChecklist
          checkList={checkList}
          updateChecklist={updateChecklist}
          handleChecklist={handleChecklist}
          handleChange={handleChange}
          dataSet={dataSet}
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
