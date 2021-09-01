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
    height: 70,
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
    marginLeft: 40,
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
  date = '12-12-2020  3:30pm',
  year = '2019',
  make = 'Mercedes-Benz',
  model = 'C-180',
  mileageOut = '12500',
  fuelOut = '1/4',
  contractNumber = '12343213',
  license = '1245GH',
  direction = 'Out',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.avis}>AVIS</Text>
          <Text style={styles.slogan}>Vehicle Inspection Slip</Text>
        </View>
        <Text style={styles.contractNumber}>{contractNumber} </Text>
      </View>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.pair}>
            <Text style={styles.title}>Agent {direction}: </Text>
            <Text style={styles.value1}>{assignee} </Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Vehicle: </Text>
            <Text style={styles.value1}>{`${year || ''} ${make || ''} ${
              model || ''
            }`}</Text>
          </View>
          <View style={styles.pair}>
            <Text style={styles.title}>Mileage Out: </Text>
            <Text style={styles.value1}>{mileageOut} km</Text>
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
            <Text style={styles.title}>Fuel Out: </Text>
            <Text style={styles.value1}>{fuelOut} tank</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
