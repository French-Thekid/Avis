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
    height: 90,
    justifyContent: 'space-between',
  },
  logo: {
    height: 'auto',
    flexDirection: 'column',
    alignContent: 'start',
    marginLeft: 200,
  },
  avis: {
    fontSize: 33,
    color: '#FF205D',
    marginBottom: 3,
    marginLeft: 35,
  },
  slogan: {
    fontSize: 15,
    color: '#aab7c8',
    marginBottom: 3,
  },
  pair: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 10,
  },
  title: { fontSize: 12, color: '#236fa1' },
  value1: { fontSize: 12, color: '#000000' },

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
  contractNumber: {
    fontSize: 12,
    color: '#5570f6',
  },
})

export default function TemplateHeader({
  assignee = 'Micheal Chin',
  date = '12-12-2020',
  year = '2019',
  make = 'Mercedes-Benz',
  model = 'C-180',
  mileage = '12500',
  nextMileage = '17500',
  fuel = '1/4',
  colour = 'white',
  license = '1245GH',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.avis}>AVIS</Text>
          <Text style={styles.slogan}>Maintainance Report</Text>
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.pair}>
            <Text style={styles.title}>Assignee: </Text>
            <Text style={styles.value1}>{assignee} </Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Vehicle: </Text>
            <Text style={styles.value1}>{`${year || ''} ${make || ''} ${
              model || ''
            }`}</Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Mileage: </Text>
            <Text style={styles.value1}>{mileage} km</Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Next Service Mileage: </Text>
            <Text style={styles.value1}>{nextMileage} km</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.pair}>
            <Text style={styles.title}>Date: </Text>
            <Text style={styles.value1}>{date} </Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>License No.: </Text>
            <Text style={styles.value1}>{license}</Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Colour: </Text>
            <Text style={styles.value1}>{colour}</Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Fuel: </Text>
            <Text style={styles.value1}>{fuel} tank</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
