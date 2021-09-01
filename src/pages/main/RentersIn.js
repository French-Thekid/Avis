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
import { SignatureOutModal, SignatureInModal } from './modals'
import { SendSlip } from './SendEmail'
import MyDocument from './pdf/custom/Document'
import { pdf } from '@react-pdf/renderer'

const queryString = require('query-string')

export default function CustomerReview() {
  const history = useHistory()
  const { search } = useLocation()
  const { action } = queryString.parse(search)

  const data = {
    contractNumber: '1232321',
    license: '1301FT',
    make: 'TOYOTA',
    model: 'HILUX',
    year: '2010',
    mileageIn: '',
    mileageOut: '23670',
    fuelIn: '',
    fuelOut: '3/4',
    frontDoorLeft: 5,
    frontDoorRight: 5,
    front: 5,
    roof: 5,
    rearDoorLeft: 5,
    rear: 5,
    frontFenderLeft: 5,
    rearDoorRight: 5,
    frontWheelLeft: 5,
    frontFenderRight: 5,
    frontWheelRight: 5,
    rearFenderLeft: 5,
    rearFenderRight: 5,
    rearWheelLeft: 5,
    rearWheelRight: 5,
    doorRear: 5,
    runningBoardLeft: 5,
    runningBoardRight: 5,
    frontWindowLeft: 5,
    frontWindowRight: 5,
    rearWindowLeft: 5,
    rearWindowRight: 5,
    windshield: 5,
    rearGlass: 5,
    tyreLeftFront: 'Maxis',
    tyreRightFront: 'Maxis',
    tyreLeftRear: 'Maxis',
    tyreRightRear: 'Maxis',
    spear: 'Maxis',
    mats: 5,
    upholstery: 5,
    sideMirror: 5,
    rims: 5,
    hubcaps: 5,
    jacks: 5,
    lugTool: 5,
    renterIn: '',
    renterOut: 'Darryl Brown',
    remark: 'Sample Remark',
    renterInSignature: '',
    renterOutSignature: 'Checked',
  }

  //State Management
  const [dataSet, updateDataSet] = useState({
    contractNumber: { value: data.contractNumber, point: 1 },
    make: { value: data.make, point: 1 },
    model: { value: data.model, point: 1 },
    year: { value: data.year, point: 1 },
    mileageIn: { value: '', point: 0 },
    mileageOut: { value: data.mileageOut, point: 1 },
    fuelIn: { value: '', point: 0 },
    fuelOut: { value: data.fuelOut, point: 1 },
    frontDoorLeft: { value: data.frontDoorLeft, point: 1 },
    frontDoorRight: { value: data.frontDoorRight, point: 1 },
    front: { value: data.front, point: 1 },
    roof: { value: data.roof, point: 1 },
    rearDoorLeft: { value: data.rearDoorLeft, point: 1 },
    rear: { value: data.rear, point: 1 },
    frontFenderLeft: { value: data.frontFenderLeft, point: 1 },
    rearDoorRight: { value: data.rearDoorRight, point: 1 },
    frontWheelLeft: { value: data.frontWheelLeft, point: 1 },
    frontFenderRight: { value: data.frontFenderRight, point: 1 },
    frontWheelRight: { value: data.frontWheelRight, point: 1 },
    rearFenderLeft: { value: data.rearFenderLeft, point: 1 },
    rearFenderRight: { value: data.rearFenderRight, point: 1 },
    rearWheelLeft: { value: data.rearWheelLeft, point: 1 },
    rearWheelRight: { value: data.rearWheelRight, point: 1 },
    doorRear: { value: data.doorRear, point: 1 },
    runningBoardLeft: { value: data.runningBoardLeft, point: 1 },
    runningBoardRight: { value: data.runningBoardRight, point: 1 },
    frontWindowLeft: { value: data.frontWindowLeft, point: 1 },
    frontWindowRight: { value: data.frontWindowRight, point: 1 },
    rearWindowLeft: { value: data.rearWindowLeft, point: 1 },
    rearWindowRight: { value: data.rearWindowRight, point: 1 },
    windshield: { value: data.windshield, point: 1 },
    rearGlass: { value: data.rearGlass, point: 1 },
    tyreLeftFront: { value: data.tyreLeftFront, point: 1 },
    tyreRightFront: { value: data.tyreRightFront, point: 1 },
    tyreLeftRear: { value: data.tyreLeftRear, point: 1 },
    tyreRightRear: { value: data.tyreRightRear, point: 1 },
    spear: { value: data.spear, point: 1 },
    mats: { value: data.mats, point: 1 },
    upholstery: { value: data.upholstery, point: 1 },
    sideMirror: { value: data.sideMirror, point: 1 },
    rims: { value: data.rims, point: 1 },
    hubcaps: { value: data.hubcaps, point: 1 },
    jacks: { value: data.jacks, point: 1 },
    lugTool: { value: data.lugTool, point: 1 },
    renterIn: { value: '', point: 0 },
    renterOut: { value: data.renterOut, point: 1 },
    remark: { value: data.remark, point: 1 },
    renterInSignature: { value: '', point: 0 },
    renterOutSignature: { value: data.renterOutSignature, point: 1 },
  })

  const [license, setLicense] = useState(data.license)
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
    dataSet.renterOut.point +
    dataSet.renterOutSignature.point +
    dataSet.renterIn.point +
    dataSet.renterInSignature.point +
    dataSet.frontDoorLeft.point +
    dataSet.frontDoorRight.point +
    dataSet.front.point +
    dataSet.roof.point +
    dataSet.rearDoorLeft.point +
    dataSet.rear.point +
    dataSet.frontFenderLeft.point +
    dataSet.rearDoorRight.point +
    dataSet.frontWheelLeft.point +
    dataSet.frontFenderRight.point +
    dataSet.frontWheelRight.point +
    dataSet.rearFenderLeft.point +
    dataSet.rearFenderRight.point +
    dataSet.rearWheelLeft.point +
    dataSet.rearWheelRight.point +
    dataSet.doorRear.point +
    dataSet.runningBoardLeft.point +
    dataSet.runningBoardRight.point +
    dataSet.frontWindowLeft.point +
    dataSet.frontWindowRight.point +
    dataSet.rearWindowLeft.point +
    dataSet.rearWindowRight.point +
    dataSet.windshield.point +
    dataSet.rearGlass.point

  const score = ((count / 48) * 100) >> 0

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
        direction: 'In',
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
        id="rentersIn"
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
              disabled
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
          <SignatureOutModal
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
