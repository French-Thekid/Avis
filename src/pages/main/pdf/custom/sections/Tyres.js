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
  value: { fontSize: 12, color: '#000' },
  text: { fontSize: 12, marginRight: 15, alignContent: 'center' },
  group: {
    flexDirection: 'row',
    alignContent: 'start',
  },
  group1: {
    flexDirection: 'row',
    alignContent: 'start',
    marginLeft: 37,
  },
  group2: {
    flexDirection: 'row',
    alignContent: 'start',
    marginLeft: 53,
  },
  group3: {
    flexDirection: 'row',
    alignContent: 'start',
    marginLeft: 31,
  },
  group4: {
    flexDirection: 'row',
    alignContent: 'start',
    marginLeft: 32,
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
  left1: {
    width: 90,
    flexDirection: 'column',
    alignContent: 'start',
    justifyContent: 'start',
  },
  right1: {
    width: 90,
    flexDirection: 'column',
    alignContent: 'start',
    marginLeft: 10,
  },
})

function StylesList(space) {
  // Create styles
  const styles = StyleSheet.create({
    value: {
      fontSize: 11,
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
  tyreLeftFront = 'Maxxis 790',
  tyreRightFront = 'Maxxis 790',
  tyreLeftRear = 'Maxxis 790',
  tyreRightRear = 'Maxxis 790',
  spear = 'Maxxis 790',
  tyreLeftFront1 = 'Maxxis 790',
  tyreRightFront1 = 'Maxxis 790',
  tyreLeftRear1 = 'Maxxis 790',
  tyreRightRear1 = 'Maxxis 790',
  spear1 = 'Maxxis 790',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Tyres</Text>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(60).title}>Out</Text>
            <Text style={StylesList(80).title}>In</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListHeader}>
            <Text style={styles.title}>Item</Text>
            <Text style={StylesList(60).title}>Out</Text>
            <Text style={StylesList(80).title}>In</Text>
          </View>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Left Front</Text>
            <View style={styles.group1}>
              <View style={styles.left1}>
                <Text style={styles.value}>{tyreLeftFront}</Text>
              </View>
              <View style={styles.right1}>
                <Text style={styles.value}>{tyreLeftFront1}</Text>
              </View>
            </View>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Left Rear</Text>
            <View style={styles.group1}>
              <View style={styles.left1}>
                <Text style={styles.value}>{tyreLeftRear}</Text>
              </View>
              <View style={styles.right1}>
                <Text style={styles.value}>{tyreLeftRear1}</Text>
              </View>
            </View>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Spear</Text>
            <View style={styles.group2}>
              <View style={styles.left1}>
                <Text style={styles.value}>{spear}</Text>
              </View>
              <View style={styles.right1}>
                <Text style={styles.value}>{spear1}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Right Front</Text>
            <View style={styles.group3}>
              <View style={styles.left1}>
                <Text style={styles.value}>{tyreRightFront}</Text>
              </View>
              <View style={styles.right1}>
                <Text style={styles.value}>{tyreRightFront1}</Text>
              </View>
            </View>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Right Rear</Text>
            <View style={styles.group4}>
              <View style={styles.left1}>
                <Text style={styles.value}>{tyreRightRear}</Text>
              </View>
              <View style={styles.right1}>
                <Text style={styles.value}>{tyreRightRear1}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
