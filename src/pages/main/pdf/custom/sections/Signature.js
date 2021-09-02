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
  small: {
    fontSize: 8,
    color: '#463188',
    marginTop: 3,
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
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    paddingBottom: 3,
  },
  disclaimer: {
    marginBottom: 10,
    fontSize: 10,
  },
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

export default function Signature({
  direction = '--',
  renterIn = '--',
  renterOut = '--',
  renterInSignature = '--',
  renterOutSignature = '--',
  out,
}) {
  return (
    <View style={styles.Container} wrap={false}>
      <Text style={styles.disclaimer}>
        I acknowledge that I have examined the car and the above information is
        correct. I understand that a cleaning fee may apply for smoking in the
        vehicle.
      </Text>
      <View style={styles.group}>
        <View style={styles.left}>
          <View style={styles.signitureColumn}>
            <Text style={styles.text}>{renterOut}</Text>
            <Image src={renterOutSignature} style={styles.signature} />
            <Text style={styles.small}>Renter Out</Text>
          </View>
        </View>
        {!out && (
          <View style={styles.right}>
            <View style={styles.signitureColumn}>
              <Text style={styles.text}>{renterIn}</Text>
              <Image src={renterInSignature} style={styles.signature} />
              <Text style={styles.small}>Renter In</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
