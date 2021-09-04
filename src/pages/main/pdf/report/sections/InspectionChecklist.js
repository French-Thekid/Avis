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
    height: 25,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F0EBFF',
    marginBottom: 10,
  },
  Title: {
    fontSize: 13,
    color: '#236fa1',
    marginTop: 6,
    marginLeft: 10,
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
  title: { fontSize: 12, color: '#236fa1' },
  value: {
    fontSize: 12,
    color: '#000',
    marginBottom: 10,
    borderBottomWidth: 0.3,
    borderColor: '#d1cae8',
  },
  group: {
    flexDirection: 'row',
    alignContent: 'start',
    marginBottom: 15,
  },
  group1: {
    flexDirection: 'row',
    alignContent: 'start',
  },
  left: {
    width: 250,
    flexDirection: 'column',
    alignContent: 'center',
  },
  middle: {
    width: 150,
    flexDirection: 'column',
    alignContent: 'center',
  },
  right: {
    width: 154,
    flexDirection: 'column',
    alignContent: 'center',
    paddingLeft: 77,
  },
  left1: {
    width: 250,
    flexDirection: 'column',
    alignContent: 'center',
  },
  middle1: {
    width: 263,
    flexDirection: 'column',
    alignContent: 'center',
  },
  right1: {
    width: 38,
    flexDirection: 'column',
    alignContent: 'center',
  },
})

function StylesList(value) {
  // Create styles
  const styles = StyleSheet.create({
    value: {
      fontSize: 12,
      marginBottom: 10,
      borderBottomWidth: 0.3,
      borderColor: '#d1cae8',
      color:
        value === 'Pass' ? '#1ae835' : value === 'Fail' ? '#ff205d' : '#000000',
    },
  })

  return styles
}

export default function TemplateInspectionChecklist({
  engineOilStatus = '',
  engineOilQuantity = '',
  oilFilterStatus = '',
  oilFilterQuantity = '',
  airFilterStatus = '',
  airFilterQuantity = '',
  sparksPlugStatus = '',
  sparksPlugQuantity = '',
  batteryStatus = '',
  batteryQuantity = '',
  brakeFluidStatus = '',
  brakeFluidQuantity = '',
  brakeShoeStatus = '',
  brakeShoeQuantity = '',
  discPadFrontStatus = '',
  discPadFrontQuantity = '',
  discPadBackStatus = '',
  discPadBackQuantity = '',
  fuelFilterStatus = '',
  fuelFilterQuantity = '',
  cabinFilterStatus = '',
  cabinFilterQuantity = '',
  transmissionStatus = '',
  transmissionQuantity = '',
  frontTyreLeft = '',
  frontTyreLeftQuantity = '',
  frontTyreRight = '',
  frontTyreRightQuantity = '',
  rearTyreLeft = '',
  rearTyreLeftQuantity = '',
  rearTyreRight = '',
  rearTyreRightQuantity = '',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Inspection Checklist</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <Text style={styles.title}>Item Name</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>Item Status</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>Quantity Used</Text>
        </View>
      </View>
      <View style={styles.group1}>
        <View style={styles.left1}>
          <Text style={styles.value}>Engine Oil Check</Text>
          <Text style={styles.value}>Oil Filter Check</Text>
          <Text style={styles.value}>Air Filter Check</Text>
          <Text style={styles.value}>Sparks Plug Check</Text>
          <Text style={styles.value}>Battery Check</Text>
          <Text style={styles.value}>Brake Fluid Check</Text>
          <Text style={styles.value}>Brake Shoe Check</Text>
          <Text style={styles.value}>Disc Pads (Front) Check</Text>
          <Text style={styles.value}>Disc Pads (Back) Check</Text>
          <Text style={styles.value}>Fuel Filter Check</Text>
          <Text style={styles.value}>Cabin Filter Check</Text>
          <Text style={styles.value}>Transmission Fluid Check</Text>
          <Text style={styles.value}>Front Left Tyre Check</Text>
          <Text style={styles.value}>Front Right Tyre Check</Text>
          <Text style={styles.value}>Rear Left Tyre Check</Text>
          <Text style={styles.value}>Rear Right Tyre Check</Text>
        </View>
        <View style={styles.middle1}>
          <Text style={StylesList(engineOilStatus).value}>
            {engineOilStatus}
          </Text>
          <Text style={StylesList(oilFilterStatus).value}>
            {oilFilterStatus}
          </Text>
          <Text style={StylesList(airFilterStatus).value}>
            {airFilterStatus}
          </Text>
          <Text style={StylesList(sparksPlugStatus).value}>
            {sparksPlugStatus}
          </Text>
          <Text style={StylesList(batteryStatus).value}>{batteryStatus}</Text>
          <Text style={StylesList(brakeFluidStatus).value}>
            {brakeFluidStatus}
          </Text>
          <Text style={StylesList(brakeShoeStatus).value}>
            {brakeShoeStatus}
          </Text>
          <Text style={StylesList(discPadFrontStatus).value}>
            {discPadFrontStatus}
          </Text>
          <Text style={StylesList(discPadBackStatus).value}>
            {discPadBackStatus}
          </Text>
          <Text style={StylesList(fuelFilterStatus).value}>
            {fuelFilterStatus}
          </Text>
          <Text style={StylesList(cabinFilterStatus).value}>
            {cabinFilterStatus}
          </Text>
          <Text style={StylesList(transmissionStatus).value}>
            {transmissionStatus}
          </Text>
          <Text style={StylesList(frontTyreLeft).value}>{frontTyreLeft}</Text>
          <Text style={StylesList(frontTyreRight).value}>{frontTyreRight}</Text>
          <Text style={StylesList(rearTyreLeft).value}>{rearTyreLeft}</Text>
          <Text style={StylesList(rearTyreRight).value}>{rearTyreRight}</Text>
        </View>
        <View style={styles.right1}>
          <Text style={styles.value}>{Replacement(engineOilQuantity)}</Text>
          <Text style={styles.value}>{Replacement(oilFilterQuantity)}</Text>
          <Text style={styles.value}>{Replacement(airFilterQuantity)}</Text>
          <Text style={styles.value}>{Replacement(sparksPlugQuantity)}</Text>
          <Text style={styles.value}>{Replacement(batteryQuantity)}</Text>
          <Text style={styles.value}>{Replacement(brakeFluidQuantity)}</Text>
          <Text style={styles.value}>{Replacement(brakeShoeQuantity)}</Text>
          <Text style={styles.value}>{Replacement(discPadFrontQuantity)}</Text>
          <Text style={styles.value}>{Replacement(discPadBackQuantity)}</Text>
          <Text style={styles.value}>{Replacement(fuelFilterQuantity)}</Text>
          <Text style={styles.value}>{Replacement(cabinFilterQuantity)}</Text>
          <Text style={styles.value}>{Replacement(transmissionQuantity)}</Text>
          <Text style={styles.value}>{Replacement(frontTyreLeftQuantity)}</Text>
          <Text style={styles.value}>
            {Replacement(frontTyreRightQuantity)}
          </Text>
          <Text style={styles.value}>{Replacement(rearTyreLeftQuantity)}</Text>
          <Text style={styles.value}>{Replacement(rearTyreRightQuantity)}</Text>
        </View>
      </View>
    </View>
  )
}

const Replacement = (string) => {
  if (string === '') return 0
  return string
}
