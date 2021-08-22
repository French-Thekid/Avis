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
    marginTop: 10,
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
  },
  logo: {
    height: 'auto',
    flexDirection: 'column',
    alignContent: 'start',
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

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  pair: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 10,
  },
  pair1: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 10,
    marginLeft: 71,
  },
  title: { fontSize: 12, color: '#236fa1' },
  value: { fontSize: 12, color: '#000000' },
  value1: { fontSize: 12, color: '#000000' },
  value11: { fontSize: 12, color: '#000000', marginLeft: 15 },
  value2: { fontSize: 12, color: '#000000', marginLeft: 42 },
  value3: { fontSize: 12, color: '#000000', marginLeft: 30 },
  value4: { fontSize: 12, color: '#000000', marginLeft: 5 },
  value5: { fontSize: 12, color: '#000000', marginLeft: 12 },

  three: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  //Old
  userDate: {
    height: 'auto',
    marginRight: 35,
    flexDirection: 'column',
    alignContent: 'start',
  },
  image: {
    marginBottom: 10,
    height: 90,
    width: 90,
    borderRadius: 50,
    marginRight: 20,
  },

  text: {
    fontSize: 12,
    color: '#9caabb',
    marginBottom: 3,
  },

  secondColumn: {
    // marginLeft: 20,
    marginTop: 25,
  },
})

export default function TemplateHeader({
  assignee = 'Micheal Chin',
  date = '12-12-2020  3:30pm',
  year = '2019',
  make = 'Mercedes-Benz',
  model = 'C-180',
  mileageIn = '12500',
  mileageOut = '12500',
  fuelIn = '1/4',
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
      </View>

      <View style={styles.pair}>
        <Text style={styles.title}>Contract No.: </Text>
        <Text style={styles.value1}>{contractNumber} </Text>
      </View>
      <View style={styles.pair}>
        <Text style={styles.title}>Agent {direction}: </Text>
        <Text style={styles.value11}>{assignee} </Text>
      </View>
      <View style={styles.pair}>
        <Text style={styles.title}>Date: </Text>
        <Text style={styles.value2}>{date} </Text>
      </View>

      <View style={styles.pair}>
        <Text style={styles.title}>Vehicle: </Text>
        <Text style={styles.value3}>{`${year || ''} ${make || ''} ${
          model || ''
        }`}</Text>
      </View>
      <View style={styles.section1}>
        <View style={styles.pair}>
          <Text style={styles.title}>License No.: </Text>
          <Text style={styles.value4}>{license}</Text>
        </View>
      </View>

      <View style={styles.three}>
        <View style={styles.pair}>
          <Text style={styles.title}>Mileage In: </Text>
          <Text style={styles.value5}>{mileageIn} km</Text>
        </View>
        <View style={styles.pair}>
          <Text style={styles.title}>Mileage Out: </Text>
          <Text style={styles.value}>{mileageOut} km</Text>
        </View>
        <View style={styles.pair}>
          <Text style={styles.title}>Fuel In: </Text>
          <Text style={styles.value}>{fuelIn} tank</Text>
        </View>
        <View style={styles.pair}>
          <Text style={styles.title}>Fuel Out: </Text>
          <Text style={styles.value}>{fuelOut} tank</Text>
        </View>
      </View>
    </View>
  )
}
