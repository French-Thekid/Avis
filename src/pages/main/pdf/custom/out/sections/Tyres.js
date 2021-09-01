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
  text: { fontSize: 12, marginRight: 15, alignContent: 'center' },
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
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(130).title}>Detail</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(130).title}>Detail</Text>
          </View>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Left Front</Text>
            <Text style={StylesList(103).value}>{tyreLeftFront}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Left Rear</Text>
            <Text style={StylesList(105).value}>{tyreLeftRear}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Spear</Text>
            <Text style={StylesList(122).value}>{spear}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Right Front</Text>
            <Text style={StylesList(97).value}>{tyreRightFront}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Right Rear</Text>
            <Text style={StylesList(99).value}>{tyreRightRear}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
