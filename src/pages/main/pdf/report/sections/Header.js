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
    marginLeft: 30,
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
  value1: { fontSize: 12, color: '#000000', marginLeft: 36 },
  value2: { fontSize: 12, color: '#000000', marginLeft: 60 },
  value3: { fontSize: 12, color: '#000000', marginLeft: 50 },

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

      <View style={styles.pair}>
        <Text style={styles.title}>Assignee: </Text>
        <Text style={styles.value1}>{assignee} </Text>
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
          <Text style={styles.title}>License Number: </Text>
          <Text style={styles.value}>{license}</Text>
        </View>
        <View style={styles.pair1}>
          <Text style={styles.title}>Colour: </Text>
          <Text style={styles.value}>{colour}</Text>
        </View>
      </View>

      <View style={styles.three}>
        <View style={styles.pair}>
          <Text style={styles.title}>Current Mileage: </Text>
          <Text style={styles.value}>{mileage} km</Text>
        </View>
        <View style={styles.pair}>
          <Text style={styles.title}>Next Service Mileage: </Text>
          <Text style={styles.value}>{nextMileage} km</Text>
        </View>
        <View style={styles.pair}>
          <Text style={styles.title}>Fuel Meter: </Text>
          <Text style={styles.value}>{fuel} tank</Text>
        </View>
      </View>
    </View>
  )
}
