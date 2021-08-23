import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import 'styled-components/macro'
import { Colours, FormControl, Notification, Loading } from '../../components'
import {
  Completion,
  VehicleIdentification1,
  MileageFuelCheck,
  DamageCheckList,
  Accessories,
  Tyres,
  Signing,
  Remark,
} from './sections'
import { SignatureModal, SignatureInModal } from './modals'
import { SendSlip } from './SendEmail'
import MyDocument from './pdf/custom/Document'
import { pdf } from '@react-pdf/renderer'

const queryString = require('query-string')

export default function CustomerReview() {
  const history = useHistory()
  const { search } = useLocation()
  const { action } = queryString.parse(search)

  //State Management
  const [dataSet, updateDataSet] = useState({
    contractNumber: { value: '', point: 0 },
    make: { value: '', point: 0 },
    model: { value: '', point: 0 },
    year: { value: '', point: 0 },
    mileageIn: { value: '', point: 0 },
    mileageOut: { value: '', point: 0 },
    fuelIn: { value: '', point: 0 },
    fuelOut: { value: '', point: 0 },
    frontDoorLeft: { value: '', point: 0 },
    frontDoorRight: { value: '', point: 0 },
    front: { value: '', point: 0 },
    roof: { value: '', point: 0 },
    rearDoorLeft: { value: '', point: 0 },
    rear: { value: '', point: 0 },
    frontFenderLeft: { value: '', point: 0 },
    rearDoorRight: { value: '', point: 0 },
    frontWheelLeft: { value: '', point: 0 },
    frontFenderRight: { value: '', point: 0 },
    frontWheelRight: { value: '', point: 0 },
    rearFenderLeft: { value: '', point: 0 },
    rearFenderRight: { value: '', point: 0 },
    rearWheelLeft: { value: '', point: 0 },
    rearWheelRight: { value: '', point: 0 },
    doorRear: { value: '', point: 0 },
    runningBoardLeft: { value: '', point: 0 },
    runningBoardRight: { value: '', point: 0 },
    frontWindowLeft: { value: '', point: 0 },
    frontWindowRight: { value: '', point: 0 },
    rearWindowLeft: { value: '', point: 0 },
    rearWindowRight: { value: '', point: 0 },
    windshield: { value: '', point: 0 },
    rearGlass: { value: '', point: 0 },
    tyreLeftFront: { value: '', point: 0 },
    tyreRightFront: { value: '', point: 0 },
    tyreLeftRear: { value: '', point: 0 },
    tyreRightRear: { value: '', point: 0 },
    spear: { value: '', point: 0 },
    mats: { value: '', point: 0 },
    upholstery: { value: '', point: 0 },
    sideMirror: { value: '', point: 0 },
    rims: { value: '', point: 0 },
    hubcaps: { value: '', point: 0 },
    jacks: { value: '', point: 0 },
    lugTool: { value: '', point: 0 },
    renterIn: { value: '', point: 0 },
    renterOut: { value: '', point: 0 },
    remark: { value: '', point: 0 },
    renterInSignature: { value: '', point: 0 },
    renterOutSignature: { value: '', point: 0 },
  })

  const [license, setLicense] = useState('')
  const [suggestions, setSuggestions] = useState([])

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

  const RentersNameCheck = () => {
    if (dataSet.renterOut.point === 1 || dataSet.renterIn.point === 1) return 1
    return 0
  }
  const RentersSignatureCheck = () => {
    if (
      dataSet.renterInSignature.point === 1 ||
      dataSet.renterOutSignature.point === 1
    )
      return 1
    return 0
  }

  const licensePoint = license.length === 6 && dataSet.model.point === 1 ? 1 : 0
  const count =
    dataSet.contractNumber.point +
    licensePoint +
    dataSet.make.point +
    dataSet.model.point +
    dataSet.year.point +
    dataSet.mileageIn.point +
    dataSet.mileageOut.point +
    dataSet.fuelIn.point +
    dataSet.fuelOut.point +
    dataSet.upholstery.point +
    dataSet.sideMirror.point +
    dataSet.mats.point +
    dataSet.rims.point +
    dataSet.hubcaps.point +
    dataSet.jacks.point +
    dataSet.lugTool.point +
    dataSet.tyreLeftFront.point +
    dataSet.tyreRightFront.point +
    dataSet.tyreLeftRear.point +
    dataSet.tyreRightRear.point +
    RentersNameCheck() +
    RentersSignatureCheck()

  const score = ((count / 22) * 100) >> 0

  function cleanUp() {
    setLicense('')
    updateDataSet({
      contractNumber: { value: '', point: 0 },
      make: { value: '', point: 0 },
      model: { value: '', point: 0 },
      year: { value: '', point: 0 },
      mileageIn: { value: '', point: 0 },
      mileageOut: { value: '', point: 0 },
      fuelIn: { value: '', point: 0 },
      fuelOut: { value: '', point: 0 },
      frontDoorLeft: { value: '', point: 0 },
      frontDoorRight: { value: '', point: 0 },
      front: { value: '', point: 0 },
      roof: { value: '', point: 0 },
      rearDoorLeft: { value: '', point: 0 },
      rear: { value: '', point: 0 },
      frontFenderLeft: { value: '', point: 0 },
      rearDoorRight: { value: '', point: 0 },
      frontWheelLeft: { value: '', point: 0 },
      frontFenderRight: { value: '', point: 0 },
      frontWheelRight: { value: '', point: 0 },
      rearFenderLeft: { value: '', point: 0 },
      rearFenderRight: { value: '', point: 0 },
      rearWheelLeft: { value: '', point: 0 },
      rearWheelRight: { value: '', point: 0 },
      doorRear: { value: '', point: 0 },
      runningBoardLeft: { value: '', point: 0 },
      runningBoardRight: { value: '', point: 0 },
      frontWindowLeft: { value: '', point: 0 },
      frontWindowRight: { value: '', point: 0 },
      rearWindowLeft: { value: '', point: 0 },
      rearWindowRight: { value: '', point: 0 },
      windshield: { value: '', point: 0 },
      rearGlass: { value: '', point: 0 },
      tyreLeftFront: { value: '', point: 0 },
      tyreRightFront: { value: '', point: 0 },
      tyreLeftRear: { value: '', point: 0 },
      tyreRightRear: { value: '', point: 0 },
      spear: { value: '', point: 0 },
      mats: { value: '', point: 0 },
      upholstery: { value: '', point: 0 },
      sideMirror: { value: '', point: 0 },
      rims: { value: '', point: 0 },
      hubcaps: { value: '', point: 0 },
      jacks: { value: '', point: 0 },
      lugTool: { value: '', point: 0 },
      renterIn: { value: '', point: 0 },
      renterOut: { value: '', point: 0 },
      remark: { value: '', point: 0 },
      renterInSignature: { value: '', point: 0 },
      renterOutSignature: { value: '', point: 0 },
    })
  }

  let TimeExtrator = new Intl.DateTimeFormat('en', {
    timeStyle: 'short',
  })

  const direction = () => {
    if (dataSet.renterOut.point === 1 && dataSet.renterOutSignature.point) {
      return 'Out'
    }
    if (dataSet.renterIn.point === 1 && dataSet.renterInSignature.point) {
      return 'In'
    }
    return 'In'
  }

  const HandleSubmission = async (e) => {
    e.preventDefault()
    if (score < 100) {
      showNotificationValidation()
    } else {
      // setloading(true)
      console.log('Submitting')

      const elements = {
        date: `${new Date().toDateString()}  ${TimeExtrator.format(
          Date.parse(new Date())
        )
          .toLowerCase()
          .split(' ')
          .join('')}`,
        direction: direction(),
        assignee: localStorage.getItem('LoggedInUser'),
        contractNumber: dataSet.contractNumber.value,
        make: dataSet.make.value,
        model: dataSet.model.value,
        year: dataSet.year.value,
        mileageIn: dataSet.mileageIn.value,
        mileageOut: dataSet.mileageOut.value,
        fuelIn: dataSet.fuelIn.value,
        fuelOut: dataSet.fuelOut.value,
        frontDoorLeft: dataSet.frontDoorLeft.value,
        frontDoorRight: dataSet.frontDoorRight.value,
        front: dataSet.front.value,
        roof: dataSet.roof.value,
        rearDoorLeft: dataSet.rearDoorLeft.value,
        rear: dataSet.rear.value,
        frontFenderLeft: dataSet.frontFenderLeft.value,
        rearDoorRight: dataSet.rearDoorRight.value,
        frontWheelLeft: dataSet.frontWheelLeft.value,
        frontFenderRight: dataSet.frontFenderRight.value,
        frontWheelRight: dataSet.frontWheelRight.value,
        rearFenderLeft: dataSet.rearFenderLeft.value,
        rearFenderRight: dataSet.rearFenderRight.value,
        rearWheelLeft: dataSet.rearWheelLeft.value,
        rearWheelRight: dataSet.rearWheelRight.value,
        doorRear: dataSet.doorRear.value,
        runningBoardLeft: dataSet.runningBoardLeft.value,
        runningBoardRight: dataSet.runningBoardRight.value,
        frontWindowLeft: dataSet.frontWindowLeft.value,
        frontWindowRight: dataSet.frontWindowRight.value,
        rearWindowLeft: dataSet.rearWindowLeft.value,
        rearWindowRight: dataSet.rearWindowRight.value,
        windshield: dataSet.windshield.value,
        rearGlass: dataSet.rearGlass.value,
        tyreLeftFront: dataSet.tyreLeftFront.value,
        tyreRightFront: dataSet.tyreRightFront.value,
        tyreLeftRear: dataSet.tyreLeftRear.value,
        tyreRightRear: dataSet.tyreRightRear.value,
        spear: dataSet.spear.value,
        mats: dataSet.mats.value,
        upholstery: dataSet.upholstery.value,
        sideMirror: dataSet.sideMirror.value,
        rims: dataSet.rims.value,
        hubcaps: dataSet.hubcaps.value,
        jacks: dataSet.jacks.value,
        lugTool: dataSet.lugTool.value,
        renterIn: dataSet.renterIn.value,
        renterOut: dataSet.renterOut.value,
        remark: dataSet.remark.value,
        license: license.toUpperCase(),
        renterInSignature: dataSet.renterInSignature.value,
        renterOutSignature: dataSet.renterOutSignature.value,
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
        // SendSlip({
        //   elements,
        //   setloading,
        //   showNotification,
        //   showNotificationFailed,
        //   cleanUp,
        // })
      }

      // SendSlip({
      //   elements,
      //   setloading,
      //   showNotification,
      //   showNotificationFailed,
      //   cleanUp,
      // })
    }
  }

  const handleChange = ({ value, key }) => {
    switch (key) {
      case 'contractNumber':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            contractNumber: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'mileageIn':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            mileageIn: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'mileageOut':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            mileageOut: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'fuelIn':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            fuelIn: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'fuelOut':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            fuelOut: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'mats':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            mats: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'upholstery':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            upholstery: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'sideMirror':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            sideMirror: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rims':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rims: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'hubcaps':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            hubcaps: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'jacks':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            jacks: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'lugTool':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            lugTool: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'tyreLeftFront':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            tyreLeftFront: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'tyreRightFront':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            tyreRightFront: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'tyreLeftRear':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            tyreLeftRear: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'tyreRightRear':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            tyreRightRear: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'spear':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            spear: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'remark':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            remark: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'renterIn':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            renterIn: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'renterInSignature':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            renterInSignature: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'renterOut':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            renterOut: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'renterOutSignature':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            renterOutSignature: {
              value: value,
              point: value === '' ? 0 : 1,
            },
          }
        })
        break

      case 'frontDoorLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontDoorLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontDoorRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontDoorRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'front':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            front: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'roof':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            roof: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearDoorLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearDoorLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rear':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rear: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontFenderLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontFenderLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearDoorRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearDoorRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontWheelLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontWheelLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontFenderRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontFenderRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontWheelRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontWheelRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearFenderLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearFenderLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearFenderRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearFenderRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearWheelLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearWheelLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearWheelRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearWheelRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'doorRear':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            doorRear: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'runningBoardLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            runningBoardLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'runningBoardRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            runningBoardRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontWindowLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontWindowLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'frontWindowRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            frontWindowRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearWindowLeft':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearWindowLeft: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearWindowRight':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearWindowRight: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'windshield':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            windshield: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break
      case 'rearGlass':
        updateDataSet((prevState) => {
          return {
            ...prevState,
            rearGlass: {
              value: value.target.value,
              point: value.target.value === '' ? 0 : 1,
            },
          }
        })
        break

      default:
        console.log('Something went wrong')
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
        subject="Slip Successfully Sent!"
        message="Your slip will not be reviewed by your admin."
        notification={completed}
      />
      <Notification
        setcompleted={setcompleted1}
        title="Request Unsuccessful!"
        subject="Incomplete form!"
        message="Please ensure all required fields are filled, then try again"
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
        id="submitReview"
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
        <div
          css={`
            display: grid;
            grid-template-columns: max-content 1fr max-content;
          `}
        >
          <div
            css={`
              padding: 20px;
              background: #fff;
              border: 1px solid ${Colours.border};
              border-radius: 5px;
            `}
          >
            <FormControl.Input
              id="contractNumber"
              label="Contract Number"
              placeholder="Contract Number"
              name="contractNumber"
              type="number"
              onChange={(e) =>
                handleChange({ value: e, key: 'contractNumber' })
              }
              value={dataSet.contractNumber.value}
            />
          </div>
          <div />
          <div
            css={`
              padding: 20px;
              background: #fff;
              border: 1px solid ${Colours.border};
              border-radius: 5px;
            `}
          >
            <FormControl.Input
              id="date"
              label="Date"
              placeholder="Date"
              name="date"
              type="text"
              value={new Date().toDateString()}
              disabled={true}
            />
          </div>
        </div>
        <Gap />
        <VehicleIdentification1
          value={license}
          setValue={setLicense}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          dataSet={dataSet}
          handleChange={handleChange}
          updateDataSet={updateDataSet}
        />
        <Gap />
        <MileageFuelCheck dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        <DamageCheckList dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        <Accessories dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        <Tyres dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        <Remark dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        <Signing dataSet={dataSet} handleChange={handleChange} />
        <Gap />
        {action === 'renterOutSignature' && (
          <SignatureModal
            close={() => history.goBack()}
            title="Renter Out"
            setSignature={handleChange}
          />
        )}
        {action === 'renterInSignature' && (
          <SignatureInModal
            close={() => history.goBack()}
            title="Renter In"
            setSignature={handleChange}
          />
        )}
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
