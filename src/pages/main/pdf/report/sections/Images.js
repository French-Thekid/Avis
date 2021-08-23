import React from 'react'
import 'styled-components/macro'
import {
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer/dist/react-pdf.es.js'

// Create styles
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
  },

  title: { fontSize: 12, color: '#236fa1' },
  title1: { fontSize: 12, color: '#236fa1', marginLeft: 240 },
  header: {
    borderBottomWidth: 1,
    borderColor: '#d1cae8',
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 3,
  },
  images: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 3,
  },
  image: {
    height: 200,
    width: 200,
  },
  image1: {
    height: 200,
    width: 200,
    marginLeft: 130,
  },
  subContainer: {
    marginBottom: 30,
  },
})

export default function Images({
  engineOilPhoto = 'https://automology.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/07/11104025/engine-sludge.jpg',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Engin Oil Image</Text>
          <Text style={styles.title1}>Oil Filter Image</Text>
        </View>
        <View style={styles.images}>
          <Image src={engineOilPhoto} style={styles.image} />
          <Image src={engineOilPhoto} style={styles.image1} />
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Engin Oil Image</Text>
          <Text style={styles.title1}>Oil Filter Image</Text>
        </View>
        <View style={styles.images}>
          <Image src={engineOilPhoto} style={styles.image} />
          <Image src={engineOilPhoto} style={styles.image1} />
        </View>
      </View>
    </View>
  )
}
