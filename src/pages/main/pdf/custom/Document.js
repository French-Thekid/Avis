import React from 'react'
import {
  Document,
  Page,
  StyleSheet,
} from '@react-pdf/renderer/dist/react-pdf.es.js'
import {
  Header,
  DamageChecklist,
  Remark,
  Accessories,
  Signature,
  Tyres,
} from './sections'

// Create styles
const styles = StyleSheet.create({
  page: {
    width: '500px',
    padding: 10,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
})

export default function MyDocument({
  contractNumber,
  make,
  model,
  year,
  license,
  mileageIn,
  mileageOut,
  fuelIn,
  fuelOut,
  frontDoorLeft,
  frontDoorRight,
  front,
  roof,
  rearDoorLeft,
  rear,
  frontFenderLeft,
  rearDoorRight,
  frontWheelLeft,
  frontFenderRight,
  frontWheelRight,
  rearFenderLeft,
  rearFenderRight,
  rearWheelLeft,
  rearWheelRight,
  doorRear,
  runningBoardLeft,
  runningBoardRight,
  frontWindowLeft,
  frontWindowRight,
  rearWindowLeft,
  rearWindowRight,
  windshield,
  rearGlass,
  tyreLeftFront,
  tyreRightFront,
  tyreLeftRear,
  tyreRightRear,
  spear,
  mats,
  upholstery,
  sideMirror,
  rims,
  hubcaps,
  jacks,
  lugTool,
  remark,
  renterIn,
  renterOut,
  renterInSignature,
  renterOutSignature,
  assignee,
  date,
  direction = 'In',

  frontDoorLeft1,
  frontDoorRight1,
  front1,
  roof1,
  rearDoorLeft1,
  rear1,
  frontFenderLeft1,
  rearDoorRight1,
  frontWheelLeft1,
  frontFenderRight1,
  frontWheelRight1,
  rearFenderLeft1,
  rearFenderRight1,
  rearWheelLeft1,
  rearWheelRight1,
  doorRear1,
  runningBoardLeft1,
  runningBoardRight1,
  frontWindowLeft1,
  frontWindowRight1,
  rearWindowLeft1,
  rearWindowRight1,
  windshield1,
  rearGlass1,
  tyreLeftFront1,
  tyreRightFront1,
  tyreLeftRear1,
  tyreRightRear1,
  spear1,
  mats1,
  upholstery1,
  sideMirror1,
  rims1,
  hubcaps1,
  jacks1,
  lugTool1,
}) {
  return (
    <Document title={`${assignee || ''} Vehicle Inspection Slip ${date || ''}`}>
      <Page size="A4" style={styles.page}>
        <Header
          assignee={assignee}
          date={date}
          year={year}
          make={make}
          model={model}
          mileageIn={mileageIn}
          mileageOut={mileageOut}
          fuelIn={fuelIn}
          fuelOut={fuelOut}
          license={license}
          contractNumber={contractNumber}
          direction={direction}
        />
        <DamageChecklist
          direction={direction}
          frontDoorLeft={frontDoorLeft}
          frontDoorRight={frontDoorRight}
          front={front}
          roof={roof}
          rearDoorLeft={rearDoorLeft}
          rear={rear}
          frontFenderLeft={frontFenderLeft}
          rearDoorRight={rearDoorRight}
          frontWheelLeft={frontWheelLeft}
          frontFenderRight={frontFenderRight}
          frontWheelRight={frontWheelRight}
          rearFenderLeft={rearFenderLeft}
          rearFenderRight={rearFenderRight}
          rearWheelLeft={rearWheelLeft}
          rearWheelRight={rearWheelRight}
          doorRear={doorRear}
          runningBoardLeft={runningBoardLeft}
          runningBoardRight={runningBoardRight}
          frontWindowLeft={frontWindowLeft}
          frontWindowRight={frontWindowRight}
          rearWindowLeft={rearWindowLeft}
          rearWindowRight={rearWindowRight}
          windshield={windshield}
          rearGlass={rearGlass}
          frontDoorLeft1={frontDoorLeft1}
          frontDoorRight1={frontDoorRight1}
          front1={front1}
          roof1={roof1}
          rearDoorLeft1={rearDoorLeft1}
          rear1={rear1}
          frontFenderLeft1={frontFenderLeft1}
          rearDoorRight1={rearDoorRight1}
          frontWheelLeft1={frontWheelLeft1}
          frontFenderRight1={frontFenderRight1}
          frontWheelRight1={frontWheelRight1}
          rearFenderLeft1={rearFenderLeft1}
          rearFenderRight1={rearFenderRight1}
          rearWheelLeft1={rearWheelLeft1}
          rearWheelRight1={rearWheelRight1}
          doorRear1={doorRear1}
          runningBoardLeft1={runningBoardLeft1}
          runningBoardRight1={runningBoardRight1}
          frontWindowLeft1={frontWindowLeft1}
          frontWindowRight1={frontWindowRight1}
          rearWindowLeft1={rearWindowLeft1}
          rearWindowRight1={rearWindowRight1}
          windshield1={windshield1}
          rearGlass1={rearGlass1}
        />
        <Accessories
          direction={direction}
          mats={mats}
          upholstery={upholstery}
          sideMirror={sideMirror}
          rims={rims}
          hubcaps={hubcaps}
          jacks={jacks}
          lugTool={lugTool}
          mats1={mats1}
          upholstery1={upholstery1}
          sideMirror1={sideMirror1}
          rims1={rims1}
          hubcaps1={hubcaps1}
          jacks1={jacks1}
          lugTool1={lugTool1}
        />
        <Tyres
          direction={direction}
          tyreLeftFront={tyreLeftFront}
          tyreRightFront={tyreRightFront}
          tyreLeftRear={tyreLeftRear}
          tyreRightRear={tyreRightRear}
          spear={spear}
          tyreLeftFront1={tyreLeftFront1}
          tyreRightFront1={tyreRightFront1}
          tyreLeftRear1={tyreLeftRear1}
          tyreRightRear1={tyreRightRear1}
          spear1={spear1}
        />
        <Remark remark={remark} />
        <Signature
          direction={direction}
          renterIn={renterIn}
          renterOut={renterOut}
          renterInSignature={renterInSignature}
          renterOutSignature={renterOutSignature}
        />
      </Page>
    </Document>
  )
}
