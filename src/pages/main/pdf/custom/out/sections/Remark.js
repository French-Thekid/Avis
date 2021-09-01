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
    alignContent: 'start',
    marginTop: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: { fontSize: 12, color: '#236fa1' },
  header: {
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    marginBottom: 10,
    paddingBottom: 3,
  },
  value: { fontSize: 11, color: '#000000' },
})

export default function TemplateRemark({ remark = 'All went well' }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Remarks</Text>
      </View>
      <Text style={styles.value}>{remark}</Text>
    </View>
  )
}
