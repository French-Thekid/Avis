import React from 'react'
import 'styled-components/macro'
import Fade from 'react-reveal/Fade'

import { Core, FormControl, Colours, Icons } from '../../../components'

export default function InspectionChecklist({
  checkList,
  handleChecklist,
  handleChange,
  dataSet,
}) {
  const {
    engineOil,
    oilFilter,
    airFilter,
    sparksPlug,
    battery,
    brakeFluid,
    brakeShoe,
    discPadFront,
    discPadBack,
    fuelFilter,
    cabinFilter,
    transmission,
    rearTyreRight,
    rearTyreLeft,
    frontTyreRight,
    frontTyreLeft,
  } = checkList || {}

  const {
    airFilterPhoto,
    discPadsFrontPhoto,
    discPadsRearPhoto,
    frontTyreLeftPhoto,
    frontTyreRightPhoto,
    rearTyreLeftPhoto,
    rearTyreRightPhoto,
  } = dataSet || {}

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

  const Pass = () => {
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

    if (value === 16) return true

    return false
  }

  return (
    <FormControl.FieldSet
      borderColour={Pass() ? Colours.green : Colours.border}
    >
      <FormControl.Legend>Inspection Checklist</FormControl.Legend>
      <Panel
        label="Engine Oil Check"
        value={engineOil}
        handleChecklist={handleChecklist}
        keyLabel="engineOil"
      />
      <Panel
        label="Oil Filter Check"
        value={oilFilter}
        handleChecklist={handleChecklist}
        keyLabel="oilFilter"
      />
      <Panel
        label="Air Filter Check"
        value={airFilter}
        handleChecklist={handleChecklist}
        keyLabel="airFilter"
        imageNeeded
        handleChange={handleChange}
        image={airFilterPhoto}
        imageKey="airFilterPhoto"
      />
      <Panel
        label="Sparks Plug Check"
        value={sparksPlug}
        handleChecklist={handleChecklist}
        keyLabel="sparksPlug"
      />
      <Panel
        label="Battery Check"
        value={battery}
        handleChecklist={handleChecklist}
        keyLabel="battery"
      />
      <Panel
        label="Brake Fluid Check"
        value={brakeFluid}
        handleChecklist={handleChecklist}
        keyLabel="brakeFluid"
      />
      <Panel
        label="Brake Shoe Check"
        value={brakeShoe}
        handleChecklist={handleChecklist}
        keyLabel="brakeShoe"
      />
      <Panel
        label="Disc Pads (Front)"
        value={discPadFront}
        handleChecklist={handleChecklist}
        keyLabel="discPadFront"
        imageNeeded
        handleChange={handleChange}
        image={discPadsFrontPhoto}
        imageKey="discPadsFrontPhoto"
      />
      <Panel
        label="Disc Pads (Back)"
        value={discPadBack}
        handleChecklist={handleChecklist}
        keyLabel="discPadBack"
        imageNeeded
        handleChange={handleChange}
        image={discPadsRearPhoto}
        imageKey="discPadsRearPhoto"
      />
      <Panel
        label="Fuel Filter check"
        value={fuelFilter}
        handleChecklist={handleChecklist}
        keyLabel="fuelFilter"
      />
      <Panel
        label="Cabin Filter Check"
        value={cabinFilter}
        handleChecklist={handleChecklist}
        keyLabel="cabinFilter"
      />
      <Panel
        label="Transmission Fluid"
        value={transmission}
        handleChecklist={handleChecklist}
        keyLabel="transmission"
      />
      <Panel
        label="Front Left Tyre"
        value={frontTyreLeft}
        handleChecklist={handleChecklist}
        keyLabel="frontTyreLeft"
        imageNeeded
        handleChange={handleChange}
        image={frontTyreLeftPhoto}
        imageKey="frontTyreLeftPhoto"
      />
      <Panel
        label="Front Right Tyre"
        value={frontTyreRight}
        handleChecklist={handleChecklist}
        keyLabel="frontTyreRight"
        imageNeeded
        handleChange={handleChange}
        image={frontTyreRightPhoto}
        imageKey="frontTyreRightPhoto"
      />
      <Panel
        label="Rear Left Tyre"
        value={rearTyreLeft}
        handleChecklist={handleChecklist}
        keyLabel="rearTyreLeft"
        imageNeeded
        handleChange={handleChange}
        image={rearTyreLeftPhoto}
        imageKey="rearTyreLeftPhoto"
      />
      <Panel
        label="Rear Right Tyre"
        value={rearTyreRight}
        handleChecklist={handleChecklist}
        keyLabel="rearTyreRight"
        imageNeeded
        handleChange={handleChange}
        image={rearTyreRightPhoto}
        imageKey="rearTyreRightPhoto"
      />
    </FormControl.FieldSet>
  )
}

const Panel = ({
  value,
  label,
  keyLabel,
  handleChecklist,
  handleChange,
  imageNeeded,
  image,
  imageKey,
}) => {
  const { status, quantity, point } = value || {}
  const { point: imagePoints } = image || {}

  const showError = () => {
    if (point === 0 && status === 'Fail') return true
    return false
  }
  const showImageError = () => {
    if ((imagePoints === 0 || point === 0) && status === 'Fail') return true
    return false
  }

  return (
    <Fade bottom>
      <div
        css={`
          display: grid;
          grid-template-columns: 1fr max-content max-content max-content 1fr;
          grid-gap: 20px;
          align-items: center;
          border: 1px solid ${Colours.border};
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
        `}
      >
        <Core.Text color={Colours.blue} size="20px">
          {label}
        </Core.Text>
        <div
          css={`
            width: 80px;
            height: 80px;
            border-radius: 5px;
            border: ${`0.1px solid ${Colours.green}`};
            display: grid;
            place-items: center;
            color: ${status === 'Pass' ? Colours.foreground : Colours.text};
            background: ${status === 'Pass'
              ? Colours.green
              : Colours.foreground};
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={(e) => {
            handleChecklist({ status: 'Pass', quantity: '', key: keyLabel })
          }}
        >
          <section
            css={`
              display: grid;
              place-items: center;
              grid-gap: 5px;
            `}
          >
            <Icons.CheckCircleRoundedIcon
              style={{ fontSize: '30px', color: 'inherit' }}
            />
            <Core.Text color={'inherit'}>Pass</Core.Text>
          </section>
        </div>

        <div
          css={`
            width: 80px;
            height: 80px;
            border-radius: 5px;
            border: ${`0.1px solid ${Colours.red}`};
            display: grid;
            place-items: center;
            color: ${status === 'Fail' ? Colours.foreground : Colours.text};
            background: ${status === 'Fail' ? Colours.red : Colours.foreground};
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={(e) => {
            handleChecklist({ status: 'Fail', quantity: '', key: keyLabel })
          }}
        >
          <section
            css={`
              display: grid;
              place-items: center;
              grid-gap: 5px;
            `}
          >
            <Icons.CancelRoundedIcon
              style={{ fontSize: '30px', color: 'inherit' }}
            />
            <Core.Text color={'inherit'}>Fail</Core.Text>
          </section>
        </div>
        <div
          css={`
            border-left: 1px solid ${Colours.border};
            height: 100%;
          `}
        />
        <div
          css={`
            display: grid;
            grid-gap: ${imageNeeded && point === 0 && status === 'Fail'
              ? '5px'
              : '0px'};
          `}
        >
          <div>
            <FormControl.Input
              id="quantity"
              label="Quantity Used"
              placeholder="Quantity Used"
              name="quantity"
              type="number"
              onChange={(e) =>
                handleChecklist({
                  status: 'Fail',
                  quantity: e.target.value,
                  key: `${keyLabel}Quantity`,
                })
              }
              error={showError()}
              value={quantity}
              disabled={
                status === 'Pass' ? true : status === 'Fail' ? false : false
              }
            />
            <FormControl.Error
              show={imageNeeded ? showImageError() : showError()}
              message={
                imageNeeded
                  ? 'Quantity and Image is Required'
                  : 'Quantity is Required'
              }
            />
          </div>
          <div
            css={`
              position: relative;
              height: ${imageNeeded && status === 'Fail' ? '40px' : '0px'};
            `}
          >
            {imageNeeded && status === 'Fail' ? (
              <Core.FileChooser
                id={imageKey}
                image={image.value}
                onDone={(file) => {
                  handleChange({ value: file.base64, key: imageKey })
                }}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}
