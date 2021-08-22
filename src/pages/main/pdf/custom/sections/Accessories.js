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
    marginTop: 98,
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

export default function Accessories({
  direction = '',
  upholstery = '--',
  mats = '--',
  sideMirror = '--',
  rims = '--',
  hubcaps = '--',
  jacks = '--',
  lugTool = '--',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Accessories ({direction})</Text>
      </View>
      <View style={styles.ListHeader}>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Condition</Text>
        <Text style={styles.title}>Item</Text>
        <Text style={styles.title}>Condition</Text>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Upholstery</Text>
          <Text style={StylesList(120).value}>{upholstery}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(156).value}>Mats</Text>
          <Text style={StylesList(149).value}>{mats}</Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Side Mirror</Text>
          <Text style={StylesList(120).value}>{sideMirror}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(156).value}>Rims</Text>
          <Text style={StylesList(146).value}>{rims}</Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Hub Caps</Text>
          <Text style={StylesList(125).value}>{hubcaps}</Text>
        </View>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(156).value}>Jacks</Text>
          <Text style={StylesList(144).value}>{jacks}</Text>
        </View>
      </View>
      <View style={styles.ListValues}>
        <View style={styles.ListSubValues}>
          <Text style={StylesList(0).value}>Lug Tool</Text>
          <Text style={StylesList(133).value}>{lugTool}</Text>
        </View>
      </View>
    </View>
  )
}
