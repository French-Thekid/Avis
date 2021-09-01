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
    justifyContent: 'start',
    marginBottom: 10,
  },
  ListSubValues: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  title: { fontSize: 12, color: '#236fa1' },
  key: {
    borderWidth: 1,
    borderColor: '#236fa1',
    padding: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignContent: 'center',
  },
  badge: {
    color: '#236fa1',
    paddingRight: 10,
    marginRight: 20,
    borderRightWidth: 1,
    borderColor: '#236fa1',
    fontSize: 8,
  },
  text: { fontSize: 8, marginRight: 15, alignContent: 'center' },
  group: {
    flexDirection: 'row',
    alignContent: 'start',
  },
  left: {
    width: 278,
    flexDirection: 'column',
    alignContent: 'start',
  },
  right: {
    width: 278,
    flexDirection: 'column',
    alignContent: 'start',
  },
})

function StylesList(space) {
  // Create styles
  const styles = StyleSheet.create({
    value: {
      fontSize: 12,
      color: '#000000',
      marginLeft: space,
    },
    title: {
      fontSize: 12,
      color: '#236fa1',
      marginLeft: space,
    },
  })

  return styles
}

export default function TemplateInspectionChecklist({
  direction = '',
  frontDoorLeft = ' ',
  frontDoorRight = ' ',
  front = ' ',
  roof = ' ',
  rearDoorLeft = ' ',
  rear = ' ',
  frontFenderLeft = ' ',
  rearDoorRight = ' ',
  frontWheelLeft = ' ',
  frontFenderRight = ' ',
  frontWheelRight = ' ',
  rearFenderLeft = ' ',
  rearFenderRight = ' ',
  rearWheelLeft = ' ',
  rearWheelRight = ' ',
  doorRear = ' ',
  runningBoardLeft = ' ',
  runningBoardRight = ' ',
  frontWindowLeft = ' ',
  frontWindowRight = ' ',
  rearWindowLeft = ' ',
  rearWindowRight = ' ',
  windshield = ' ',
  rearGlass = ' ',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.key}>
        <Text style={styles.badge}>Key</Text>
        <Text style={styles.text}>Minor (1)</Text>
        <Text style={styles.text}>Excessive (2)</Text>
        <Text style={styles.text}>Surface (3)</Text>
        <Text style={styles.text}>Paint (4)</Text>
        <Text style={styles.text}>Ok (5)</Text>
        <Text style={styles.text}>Cracked (6)</Text>
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Damage Checklist ({direction})</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(150).title}>Condition</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(150).title}>Condition</Text>
          </View>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          {roof !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Roof</Text>
              <Text style={StylesList(166).value}>
                {StringCorrection(roof)}
              </Text>
            </View>
          )}
          {rear !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear</Text>
              <Text style={StylesList(165).value}>
                {StringCorrection(rear)}
              </Text>
            </View>
          )}
          {frontDoorLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Door (Left)</Text>
              <Text style={StylesList(103).value}>
                {StringCorrection(frontDoorLeft)}
              </Text>
            </View>
          )}
          {rearDoorLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Door (Left)</Text>
              <Text style={StylesList(104).value}>
                {StringCorrection(rearDoorLeft)}
              </Text>
            </View>
          )}
          {frontFenderLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Fender (Left)</Text>
              <Text style={StylesList(91).value}>
                {StringCorrection(frontFenderLeft)}
              </Text>
            </View>
          )}
          {rearFenderLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Fender (Left)</Text>
              <Text style={StylesList(92).value}>
                {StringCorrection(rearFenderLeft)}
              </Text>
            </View>
          )}
          {frontWheelLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Wheel (Left)</Text>
              <Text style={StylesList(95).value}>
                {StringCorrection(frontWheelLeft)}
              </Text>
            </View>
          )}
          {rearWheelLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Wheel (Left)</Text>
              <Text style={StylesList(96).value}>
                {StringCorrection(rearWheelLeft)}
              </Text>
            </View>
          )}
          {runningBoardLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Running Board (Left)</Text>
              <Text style={StylesList(79).value}>
                {StringCorrection(runningBoardLeft)}
              </Text>
            </View>
          )}
          {frontWindowLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Window (Left)</Text>
              <Text style={StylesList(86).value}>
                {StringCorrection(frontWindowLeft)}
              </Text>
            </View>
          )}
          {rearWindowLeft !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Window (Left)</Text>
              <Text style={StylesList(88).value}>
                {StringCorrection(rearWindowLeft)}
              </Text>
            </View>
          )}
          {windshield !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Windshield</Text>
              <Text style={StylesList(132).value}>
                {StringCorrection(windshield)}
              </Text>
            </View>
          )}
        </View>
        {/* Right */}
        <View style={styles.right}>
          {front !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front</Text>
              <Text style={StylesList(170).value}>
                {StringCorrection(front)}
              </Text>
            </View>
          )}
          {doorRear !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Door (Rear)</Text>
              <Text style={StylesList(135).value}>
                {StringCorrection(doorRear)}
              </Text>
            </View>
          )}
          {frontDoorRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Door (Right)</Text>
              <Text style={StylesList(102).value}>
                {StringCorrection(frontDoorRight)}
              </Text>
            </View>
          )}
          {rearDoorRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Door (Right)</Text>
              <Text style={StylesList(104).value}>
                {StringCorrection(rearDoorRight)}
              </Text>
            </View>
          )}
          {frontFenderRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Fender (Right)</Text>
              <Text style={StylesList(91).value}>
                {StringCorrection(frontFenderRight)}
              </Text>
            </View>
          )}
          {rearFenderRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Fender (Right)</Text>
              <Text style={StylesList(93).value}>
                {StringCorrection(rearFenderRight)}
              </Text>
            </View>
          )}
          {frontWheelRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Wheel (Right)</Text>
              <Text style={StylesList(95).value}>
                {StringCorrection(frontWheelRight)}
              </Text>
            </View>
          )}
          {rearWheelRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Wheel (Right)</Text>
              <Text style={StylesList(97).value}>
                {StringCorrection(rearWheelRight)}
              </Text>
            </View>
          )}
          {runningBoardRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Running Board (Right)</Text>
              <Text style={StylesList(80).value}>
                {StringCorrection(runningBoardRight)}
              </Text>
            </View>
          )}
          {frontWindowRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Window (Right)</Text>
              <Text style={StylesList(87).value}>
                {StringCorrection(frontWindowRight)}
              </Text>
            </View>
          )}
          {rearWindowRight !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Window (Right)</Text>
              <Text style={StylesList(89).value}>
                {StringCorrection(rearWindowRight)}
              </Text>
            </View>
          )}
          {rearGlass !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Glass</Text>
              <Text style={StylesList(140).value}>
                {StringCorrection(rearGlass)}
              </Text>
            </View>
          )}
        </View>
        {/* End of Group */}
      </View>
    </View>
  )
}

const StringCorrection = (value) => {
  if (value === '') return '--'
  return value
}
