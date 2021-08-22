import React from 'react'
import 'styled-components/macro'
import {
  Image,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer/dist/react-pdf.es.js'

// Create styles
const styles = StyleSheet.create({
  signitureColumn: {
    marginRight: 35,
    flexDirection: 'column',
    alignContent: 'start',
  },
  text: {
    fontSize: 12,
    color: '#463188',
    marginBottom: 3,
  },
  Container: {
    flexDirection: 'columns',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    position: 'relative',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#d1cae8',
    paddingTop: 5,
    // paddingBottom: 10,
  },
  signature: {
    marginTop: 10,
    height: 30,
    width: 50,
  },
  disclaimer: {
    marginBottom: 10,
    fontSize: 10,
  },
})

export default function Signature({
  direction = '--',
  renterIn = '--',
  renterOut = 'Darryl Brown',
  renterInSignature = '--',
  renterOutSignature = 'https://www.pngfind.com/pngs/m/684-6847578_signature-png-hd-transparent-png.png',
}) {
  return (
    <View style={styles.Container} wrap={false}>
      <Text style={styles.disclaimer}>
        I acknowledge that i have exammined the car and the above information is
        correct. I understand that a cleaning fee may apply for amoking in the
        vehicle.
      </Text>
      <View style={styles.signitureColumn}>
        <Text style={styles.text}>{`${
          direction === 'Out' ? renterOut : renterIn
        }`}</Text>
        <Image
          src={direction === 'Out' ? renterOutSignature : renterInSignature}
          style={styles.signature}
        />
      </View>
    </View>
  )
}
