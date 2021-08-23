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
    marginTop: 30,
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
    marginLeft: 10,
  },
  ListHeader: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 20,
  },
  ListValues: {
    flexDirection: 'columns',
    justifyContent: 'start',
    marginBottom: 10,
  },
  ListSubValues: {
    flexDirection: 'row',
    justifyContent: 'start',
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    paddingBottom: 3,
    marginBottom: 10,
  },
  title: { fontSize: 15, color: '#236fa1' },
  title1: { fontSize: 15, color: '#236fa1', marginLeft: 150 },
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

export default function Tyres({
  direction = '',
  tyreLeftFront = '--',
  tyreRightFront = '--',
  tyreLeftRear = '--',
  tyreRightRear = '--',
  spear = '--',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Tyres ({direction})</Text>
      </View>
      <View style={styles.ListHeader}>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title1}>Condition</Text>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Left Front</Text>
          <Text style={StylesList(133).value}>{tyreLeftFront}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Right Front</Text>
          <Text style={StylesList(123).value}>{tyreRightFront}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Left Rear</Text>
          <Text style={StylesList(133).value}>{tyreLeftRear}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Right Rear</Text>
          <Text style={StylesList(124).value}>{tyreRightRear}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Spear</Text>
          <Text style={StylesList(149).value}>{spear}</Text>
        </View>
      </View>
    </View>
  )
}
