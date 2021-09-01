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

export default function Accessories({
  direction = '',
  upholstery = '1',
  mats = '1',
  sideMirror = '1',
  rims = '1',
  hubcaps = '1',
  jacks = '1',
  lugTool = '1',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.Title}>Accessories ({direction})</Text>
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
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Upholstery</Text>
            <Text style={StylesList(140).value}>{upholstery}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Side Mirror</Text>
            <Text style={StylesList(140).value}>{sideMirror}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Hub Caps</Text>
            <Text style={StylesList(145).value}>{hubcaps}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Lug Tool</Text>
            <Text style={StylesList(154).value}>{lugTool}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Mats</Text>
            <Text style={StylesList(169).value}>{mats}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Rims</Text>
            <Text style={StylesList(168).value}>{rims}</Text>
          </View>
          <View style={styles.ListSubValues}>
            <Text style={StylesList(0).value}>Jacks</Text>
            <Text style={StylesList(165).value}>{jacks}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
