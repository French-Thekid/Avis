import React from 'react'
import 'styled-components/macro'
import {
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer/dist/react-pdf.es.js'

// Create styles
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 0,
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F0EBFF',
    marginBottom: 15,
  },
  Title: {
    fontSize: 20,
    color: '#236fa1',
    marginTop: 3,
    marginLeft: 25,
  },
  ListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ListValues: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    paddingBottom: 3,
  },
  title: { fontSize: 15, color: '#236fa1' },
})

function StylesList({ space, value, alt, exemp }) {
  // Create styles
  const styles = StyleSheet.create({
    value: {
      fontSize: 12,
      color: exemp
        ? '#000000'
        : value === 'Pass'
        ? '#1ae835'
        : value === 'Fail'
        ? '#ff205d'
        : '#000000',
      marginLeft: value === 'Pass' ? space : value === 'Fail' ? alt : space,
    },
  })

  return styles
}

export default function TemplateInspectionChecklist({
  engineOilStatus = 'Pass',
  engineOilQuantity = 8,
  oilFilterStatus = 'Pass',
  oilFilterQuantity = 1,
  airFilterStatus = 'Pass',
  airFilterQuantity = 1,
  sparksPlugStatus = 'Pass',
  sparksPlugQuantity = 1,
  batteryStatus = 'Pass',
  batteryQuantity = 1,
  brakeFluidStatus = 'Pass',
  brakeFluidQuantity = 1,
  brakeShoeStatus = 'Pass',
  brakeShoeQuantity = 1,
  discPadFrontStatus = 'Pass',
  discPadFrontQuantity = 1,
  discPadBackStatus = 'Pass',
  discPadBackQuantity = 1,
  fuelFilterStatus = 'Pass',
  fuelFilterQuantity = 1,
  cabinFilterStatus = 'Pass',
  cabinFilterQuantity = 1,
  transmissionStatus = 'Pass',
  transmissionQuantity = 1,
  tyreStatus = 'Pass',
  tyreQuantity = 1,
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Inspection Checklist</Text>
      </View>
      <View style={styles.ListHeader}>
        <Text style={styles.title}>Item Name</Text>
        <Text style={styles.title}>Item Status</Text>
        <Text style={styles.title}>Quantity Used</Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Engine Oil check</Text>
        <Text
          style={
            StylesList({ space: 160, value: engineOilStatus, alt: 160 }).value
          }
        >
          {engineOilStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 230,
              value: engineOilStatus,
              alt: 237,
              exemp: true,
            }).value
          }
        >
          {engineOilQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Oil Filter Check</Text>
        <Text
          style={
            StylesList({ space: 168, value: oilFilterStatus, alt: 168 }).value
          }
        >
          {oilFilterStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 230,
              value: oilFilterStatus,
              alt: 237,
              exemp: true,
            }).value
          }
        >
          {oilFilterQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Air Filter Check</Text>
        <Text
          style={
            StylesList({ space: 168, value: airFilterStatus, alt: 168 }).value
          }
        >
          {airFilterStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 230,
              value: airFilterStatus,
              alt: 237,
              exemp: true,
            }).value
          }
        >
          {airFilterQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Sparks Plug Check</Text>
        <Text
          style={
            StylesList({ space: 148, value: sparksPlugStatus, alt: 148 }).value
          }
        >
          {sparksPlugStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: sparksPlugStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {sparksPlugQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Battery Check</Text>
        <Text
          style={
            StylesList({ space: 175, value: batteryStatus, alt: 175 }).value
          }
        >
          {batteryStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: batteryStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {batteryQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Brake Fluid Check</Text>
        <Text
          style={
            StylesList({ space: 154, value: brakeFluidStatus, alt: 154 }).value
          }
        >
          {brakeFluidStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: brakeFluidStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {brakeFluidQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Brake Shoe Check</Text>
        <Text
          style={
            StylesList({ space: 152, value: brakeShoeStatus, alt: 152 }).value
          }
        >
          {brakeShoeStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: brakeShoeStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {brakeShoeQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Disc Pads (Front)</Text>
        <Text
          style={
            StylesList({ space: 160, value: discPadFrontStatus, alt: 160 })
              .value
          }
        >
          {discPadFrontStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: discPadFrontStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {discPadFrontQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Disc Pads (Back)</Text>
        <Text
          style={
            StylesList({ space: 160, value: discPadBackStatus, alt: 160 }).value
          }
        >
          {discPadBackStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: discPadBackStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {discPadBackQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Fuel Filter check</Text>
        <Text
          style={
            StylesList({ space: 165, value: fuelFilterStatus, alt: 165 }).value
          }
        >
          {fuelFilterStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: fuelFilterStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {fuelFilterQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Cabin Filter Check</Text>
        <Text
          style={
            StylesList({ space: 154, value: cabinFilterStatus, alt: 154 }).value
          }
        >
          {cabinFilterStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: cabinFilterStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {cabinFilterQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Transmission Fluid</Text>
        <Text
          style={
            StylesList({ space: 154, value: transmissionStatus, alt: 154 })
              .value
          }
        >
          {transmissionStatus}
        </Text>
        <Text
          style={
            StylesList({
              space: 231,
              value: transmissionStatus,
              alt: 238,
              exemp: true,
            }).value
          }
        >
          {transmissionQuantity}
        </Text>
      </View>
      <View style={styles.ListValues}>
        <Text style={StylesList(0).value}>Tyre Check</Text>
        <Text
          style={StylesList({ space: 195, value: tyreStatus, alt: 195 }).value}
        >
          {tyreStatus}
        </Text>
        <Text
          style={
            StylesList({ space: 231, value: tyreStatus, alt: 238, exemp: true })
              .value
          }
        >
          {tyreQuantity}
        </Text>
      </View>
    </View>
  )
}
