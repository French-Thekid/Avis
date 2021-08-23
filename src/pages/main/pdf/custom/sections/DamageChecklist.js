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
  ListSubValues: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  title: { fontSize: 15, color: '#236fa1' },
  key: {
    borderWidth: 1,
    borderColor: '#236fa1',
    padding: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
  },
  badge: {
    color: '#236fa1',
    paddingRight: 10,
    marginRight: 20,
    borderRightWidth: 1,
    borderColor: '#236fa1',
    fontSize: 12,
  },
  text: { fontSize: 12, marginRight: 15, alignContent: 'center' },
})

function StylesList(space) {
  // Create styles
  const styles = StyleSheet.create({
    value: {
      fontSize: 12,
      color: '#000000',
      marginLeft: space,
    },
  })

  return styles
}

export default function TemplateInspectionChecklist({
  direction,
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
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Damage Checklist ({direction})</Text>
      </View>
      <View style={styles.ListHeader}>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Condition</Text>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Condition</Text>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Roof</Text>
          <Text style={StylesList(150).value}>{StringCorrection(roof)}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Front</Text>
          <Text style={StylesList(150).value}>{StringCorrection(front)}</Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Rear</Text>
          <Text style={StylesList(150).value}>{StringCorrection(rear)}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Door (Rear)</Text>
          <Text style={StylesList(113).value}>
            {StringCorrection(doorRear)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Front Door (Left)</Text>
          <Text style={StylesList(88).value}>
            {StringCorrection(frontDoorLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Front Door (Right)</Text>
          <Text style={StylesList(80).value}>
            {StringCorrection(frontDoorRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Rear Door (Left)</Text>
          <Text style={StylesList(88).value}>
            {StringCorrection(rearDoorLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Rear Door (Right)</Text>
          <Text style={StylesList(83).value}>
            {StringCorrection(rearDoorRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Front Fender (Left)</Text>
          <Text style={StylesList(76).value}>
            {StringCorrection(frontFenderLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Front Fender (Right)</Text>
          <Text style={StylesList(69).value}>
            {StringCorrection(frontFenderRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Rear Fender (Left)</Text>
          <Text style={StylesList(76).value}>
            {StringCorrection(rearFenderLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Rear Fender (Right)</Text>
          <Text style={StylesList(71).value}>
            {StringCorrection(rearFenderRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Front Wheel (Left)</Text>
          <Text style={StylesList(79).value}>
            {StringCorrection(frontWheelLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Front Wheel (Right)</Text>
          <Text style={StylesList(74).value}>
            {StringCorrection(frontWheelRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Rear Wheel (Left)</Text>
          <Text style={StylesList(80).value}>
            {StringCorrection(rearWheelLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Rear Wheel (Right)</Text>
          <Text style={StylesList(76).value}>
            {StringCorrection(rearWheelRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Running Board (Left)</Text>
          <Text style={StylesList(63).value}>
            {StringCorrection(runningBoardLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Running Board (Right)</Text>
          <Text style={StylesList(58).value}>
            {StringCorrection(runningBoardRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Front Window (Left)</Text>
          <Text style={StylesList(70).value}>
            {StringCorrection(frontWindowLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Front Window (Right)</Text>
          <Text style={StylesList(65).value}>
            {StringCorrection(frontWindowRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Rear Window (Left)</Text>
          <Text style={StylesList(70).value}>
            {StringCorrection(rearWindowLeft)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Rear Window (Right)</Text>
          <Text style={StylesList(68).value}>
            {StringCorrection(rearWindowRight)}
          </Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Windshield</Text>
          <Text style={StylesList(114).value}>
            {StringCorrection(windshield)}
          </Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(158).value}>Rear Glass</Text>
          <Text style={StylesList(119).value}>
            {StringCorrection(rearGlass)}
          </Text>
        </View>
      </View>
      <View style={styles.key}>
        <Text style={styles.badge}>Key</Text>
        <Text style={styles.text}>Minor (1)</Text>
        <Text style={styles.text}>Excessive 21)</Text>
        <Text style={styles.text}>Surface (3)</Text>
        <Text style={styles.text}>Paint (4)</Text>
        <Text style={styles.text}>Ok (5)</Text>
        <Text style={styles.text}>Cracked (6)</Text>
      </View>
    </View>
  )
}

const StringCorrection = (value) => {
  if (value === '') return '--'
  return value
}
