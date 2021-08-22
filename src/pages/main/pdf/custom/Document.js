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
  direction = 'Out',
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
        />
        <Tyres
          direction={direction}
          tyreLeftFront={tyreLeftFront}
          tyreRightFront={tyreRightFront}
          tyreLeftRear={tyreLeftRear}
          tyreRightRear={tyreRightRear}
          spear={spear}
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
