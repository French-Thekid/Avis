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
  frontDoorLeft = '1',
  frontDoorRight = '1',
  front = '1',
  roof = '1',
  rearDoorLeft = '1',
  rear = '1',
  frontFenderLeft = '1',
  rearDoorRight = '1',
  frontWheelLeft = '1',
  frontFenderRight = '1',
  frontWheelRight = '1',
  rearFenderLeft = '1',
  rearFenderRight = '1',
  rearWheelLeft = '1',
  rearWheelRight = '1',
  doorRear = '1',
  runningBoardLeft = '1',
  runningBoardRight = '1',
  frontWindowLeft = '1',
  frontWindowRight = '1',
  rearWindowLeft = '1',
  rearWindowRight = '1',
  windshield = '1',
  rearGlass = '1',
  frontDoorLeft1 = '1',
  frontDoorRight1 = '1',
  front1 = '1',
  roof1 = '1',
  rearDoorLeft1 = '1',
  rear1 = '1',
  frontFenderLeft1 = '1',
  rearDoorRight1 = '1',
  frontWheelLeft1 = '1',
  frontFenderRight1 = '1',
  frontWheelRight1 = '1',
  rearFenderLeft1 = '1',
  rearFenderRight1 = '1',
  rearWheelLeft1 = '1',
  rearWheelRight1 = '1',
  doorRear1 = '1',
  runningBoardLeft1 = '1',
  runningBoardRight1 = '1',
  frontWindowLeft1 = '1',
  frontWindowRight1 = '1',
  rearWindowLeft1 = '1',
  rearWindowRight1 = '1',
  windshield1 = '1',
  rearGlass1 = '1',
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
        <Text style={styles.Title}>Damage Checklist</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(135).title}>Out</Text>
            <Text style={StylesList(50).title}>In</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(135).title}>Out</Text>
            <Text style={StylesList(50).title}>In</Text>
          </View>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          {roof1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Roof</Text>
              <Text style={StylesList(140).value}>
                {StringCorrection(roof)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(roof1)}
              </Text>
            </View>
          )}
          {rear1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear</Text>
              <Text style={StylesList(139).value}>
                {StringCorrection(rear)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rear1)}
              </Text>
            </View>
          )}
          {frontDoorLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Door (Left)</Text>
              <Text style={StylesList(77).value}>
                {StringCorrection(frontDoorLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontDoorLeft1)}
              </Text>
            </View>
          )}
          {rearDoorLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Door (Left)</Text>
              <Text style={StylesList(78).value}>
                {StringCorrection(rearDoorLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearDoorLeft1)}
              </Text>
            </View>
          )}
          {frontFenderLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Fender (Left)</Text>
              <Text style={StylesList(65).value}>
                {StringCorrection(frontFenderLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontFenderLeft1)}
              </Text>
            </View>
          )}
          {rearFenderLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Fender (Left)</Text>
              <Text style={StylesList(66).value}>
                {StringCorrection(rearFenderLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearFenderLeft1)}
              </Text>
            </View>
          )}
          {frontWheelLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Wheel (Left)</Text>
              <Text style={StylesList(69).value}>
                {StringCorrection(frontWheelLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontWheelLeft1)}
              </Text>
            </View>
          )}
          {rearWheelLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Wheel (Left)</Text>
              <Text style={StylesList(70).value}>
                {StringCorrection(rearWheelLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearWheelLeft1)}
              </Text>
            </View>
          )}
          {runningBoardLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Running Board (Left)</Text>
              <Text style={StylesList(53).value}>
                {StringCorrection(runningBoardLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(runningBoardLeft1)}
              </Text>
            </View>
          )}
          {frontWindowLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Window (Left)</Text>
              <Text style={StylesList(60).value}>
                {StringCorrection(frontWindowLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontWindowLeft1)}
              </Text>
            </View>
          )}
          {rearWindowLeft1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Window (Left)</Text>
              <Text style={StylesList(62).value}>
                {StringCorrection(rearWindowLeft)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearWindowLeft1)}
              </Text>
            </View>
          )}
          {windshield1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Windshield</Text>
              <Text style={StylesList(106).value}>
                {StringCorrection(windshield)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(windshield1)}
              </Text>
            </View>
          )}
        </View>
        {/* Right */}
        <View style={styles.right}>
          {front1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front</Text>
              <Text style={StylesList(141).value}>
                {StringCorrection(front)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(front1)}
              </Text>
            </View>
          )}
          {doorRear1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Door (Rear)</Text>
              <Text style={StylesList(106).value}>
                {StringCorrection(doorRear)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(doorRear1)}
              </Text>
            </View>
          )}
          {frontDoorRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Door (Right)</Text>
              <Text style={StylesList(73).value}>
                {StringCorrection(frontDoorRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontDoorRight1)}
              </Text>
            </View>
          )}
          {rearDoorRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Door (Right)</Text>
              <Text style={StylesList(75).value}>
                {StringCorrection(rearDoorRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearDoorRight1)}
              </Text>
            </View>
          )}
          {frontFenderRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Fender (Right)</Text>
              <Text style={StylesList(62).value}>
                {StringCorrection(frontFenderRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontFenderRight1)}
              </Text>
            </View>
          )}
          {rearFenderRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Fender (Right)</Text>
              <Text style={StylesList(64).value}>
                {StringCorrection(rearFenderRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearFenderRight1)}
              </Text>
            </View>
          )}
          {frontWheelRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Wheel (Right)</Text>
              <Text style={StylesList(66).value}>
                {StringCorrection(frontWheelRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontWheelRight1)}
              </Text>
            </View>
          )}
          {rearWheelRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Wheel (Right)</Text>
              <Text style={StylesList(68).value}>
                {StringCorrection(rearWheelRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearWheelRight1)}
              </Text>
            </View>
          )}
          {runningBoardRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Running Board (Right)</Text>
              <Text style={StylesList(51).value}>
                {StringCorrection(runningBoardRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(runningBoardRight1)}
              </Text>
            </View>
          )}
          {frontWindowRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Front Window (Right)</Text>
              <Text style={StylesList(58).value}>
                {StringCorrection(frontWindowRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(frontWindowRight1)}
              </Text>
            </View>
          )}
          {rearWindowRight1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Window (Right)</Text>
              <Text style={StylesList(60).value}>
                {StringCorrection(rearWindowRight)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearWindowRight1)}
              </Text>
            </View>
          )}
          {rearGlass1 !== 5 && (
            <View style={styles.ListSubValues}>
              <Text style={StylesList(0).value}>Rear Glass</Text>
              <Text style={StylesList(111).value}>
                {StringCorrection(rearGlass)}
              </Text>
              <Text style={StylesList(56).value}>
                {StringCorrection(rearGlass1)}
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
