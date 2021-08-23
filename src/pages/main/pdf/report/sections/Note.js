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
    justifyContent: 'start',
    marginTop: 0,
    marginBottom: 70,
    padding: 10,
    flexGrow: 1,
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
  title: { fontSize: 12, color: '#236fa1' },
  header: {
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    marginBottom: 10,
    paddingBottom: 3,
  },
  value: { fontSize: 10, color: '#000000' },
})

export default function TemplateNote({ note = 'All went well' }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Inspection Note</Text>
      </View>
      <Text style={styles.value}>{note}</Text>
    </View>
  )
}
