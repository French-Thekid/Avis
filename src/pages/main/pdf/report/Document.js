import React from 'react'
import {
  Document,
  Page,
  StyleSheet,
} from '@react-pdf/renderer/dist/react-pdf.es.js'
import { Header, InspectionCheckList, Note, Images } from './sections'

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
  assignee,
  date,
  year,
  make,
  model,
  mileage,
  nextMileage,
  fuel,
  colour,
  license,
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
}) {
  return (
    <Document
      title={`${
        assignee || ''
      } Maintainance Report ${new Date().toDateString()}`}
    >
      <Page size="A4" style={styles.page}>
        <Header
          assignee={assignee}
          date={date}
          year={year}
          make={make}
          model={model}
          mileage={mileage}
          nextMileage={nextMileage}
          fuel={fuel}
          colour={colour}
          license={license}
        />
        <InspectionCheckList
          engineOilStatus={engineOilStatus}
          engineOilQuantity={engineOilQuantity}
          oilFilterStatus={oilFilterStatus}
          oilFilterQuantity={oilFilterQuantity}
          airFilterStatus={airFilterStatus}
          airFilterQuantity={airFilterQuantity}
          sparksPlugStatus={sparksPlugStatus}
          sparksPlugQuantity={sparksPlugQuantity}
          batteryStatus={batteryStatus}
          batteryQuantity={batteryQuantity}
          brakeFluidStatus={brakeFluidStatus}
          brakeFluidQuantity={brakeFluidQuantity}
          brakeShoeStatus={brakeShoeStatus}
          brakeShoeQuantity={brakeShoeQuantity}
          discPadFrontStatus={discPadFrontStatus}
          discPadFrontQuantity={discPadFrontQuantity}
          discPadBackStatus={discPadBackStatus}
          discPadBackQuantity={discPadBackQuantity}
          fuelFilterStatus={fuelFilterStatus}
          fuelFilterQuantity={fuelFilterQuantity}
          cabinFilterStatus={cabinFilterStatus}
          cabinFilterQuantity={cabinFilterQuantity}
          transmissionStatus={transmissionStatus}
          transmissionQuantity={transmissionQuantity}
          frontTyreLeft={frontTyreLeft}
          frontTyreLeftQuantity={frontTyreLeftQuantity}
          frontTyreRight={frontTyreRight}
          frontTyreRightQuantity={frontTyreRightQuantity}
          rearTyreLeft={rearTyreLeft}
          rearTyreLeftQuantity={rearTyreLeftQuantity}
          rearTyreRight={rearTyreRight}
          rearTyreRightQuantity={rearTyreRightQuantity}
        />
        <Note note={note} />
      </Page>
      {(airFilterPhoto !== '' ||
        discPadsFrontPhoto !== '' ||
        discPadsRearPhoto !== '' ||
        frontTyreLeftPhoto !== '' ||
        frontTyreRightPhoto !== '' ||
        rearTyreLeftPhoto !== '' ||
        rearTyreRightPhoto !== '') && (
        <Page size="A4" style={styles.page}>
          <Images
            airFilterPhoto={airFilterPhoto}
            discPadsFrontPhoto={discPadsFrontPhoto}
            discPadsRearPhoto={discPadsRearPhoto}
            frontTyreLeftPhoto={frontTyreLeftPhoto}
            frontTyreRightPhoto={frontTyreRightPhoto}
            rearTyreLeftPhoto={rearTyreLeftPhoto}
            rearTyreRightPhoto={rearTyreRightPhoto}
          />
        </Page>
      )}
    </Document>
  )
}
