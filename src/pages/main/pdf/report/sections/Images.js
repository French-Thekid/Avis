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

  title: {
    fontSize: 12,
    color: '#236fa1',
    marginBottom: 10,
    borderBottomWidth: 0.6,
    paddingBottom: 3,
    borderColor: '#d1cae8',
  },
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
    marginBottom: 50,
  },

  subContainer: {
    marginBottom: 30,
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

export default function Images({
  airFilterPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  discPadsFrontPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  discPadsRearPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  frontTyreLeftPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  frontTyreRightPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  rearTyreLeftPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
  rearTyreRightPhoto = 'https://wallpaperaccess.com/full/508751.jpg',
}) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.group}>
        <View style={styles.left}>
          {frontTyreLeftPhoto !== '' && (
            <View>
              <Text style={styles.title}>Front Left Tyre Photo</Text>
              <Image src={frontTyreLeftPhoto} style={styles.image} />
            </View>
          )}
          {rearTyreLeftPhoto !== '' && (
            <View>
              <Text style={styles.title}>Rear Left Tyre Photo</Text>
              <Image src={rearTyreLeftPhoto} style={styles.image} />
            </View>
          )}
          {discPadsRearPhoto !== '' && (
            <View>
              <Text style={styles.title}>Disc Pad Front Photo</Text>
              <Image src={discPadsRearPhoto} style={styles.image} />
            </View>
          )}
          {airFilterPhoto !== '' && (
            <View>
              <Text style={styles.title}>Air Filter Photo</Text>
              <Image src={airFilterPhoto} style={styles.image} />
            </View>
          )}
        </View>
        <View style={styles.right}>
          {frontTyreRightPhoto !== '' && (
            <View>
              <Text style={styles.title}>Front Right Tyre Photo</Text>
              <Image src={frontTyreRightPhoto} style={styles.image} />
            </View>
          )}
          {rearTyreRightPhoto !== '' && (
            <View>
              <Text style={styles.title}>Rear Right Tyre Photo</Text>
              <Image src={rearTyreRightPhoto} style={styles.image} />
            </View>
          )}
          {discPadsFrontPhoto !== '' && (
            <View>
              <Text style={styles.title}>Disc Pad Rear Photo</Text>
              <Image src={discPadsFrontPhoto} style={styles.image} />
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
