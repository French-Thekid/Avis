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
  airFilterPhoto = '',
  discPadsFrontPhoto = '',
  discPadsRearPhoto = '',
  frontTyreLeftPhoto = '',
  frontTyreRightPhoto = '',
  rearTyreLeftPhoto = '',
  rearTyreRightPhoto = '',
}) {
  const ImageController1 = [
    { title: 'Front Left Tyre Photo', image: frontTyreLeftPhoto },
    { title: 'Rear Left Tyre Photo', image: rearTyreLeftPhoto },
    { title: 'Disc Pad Front Photo', image: discPadsRearPhoto },
    { title: 'Air Filter Photo', image: airFilterPhoto },
    { title: 'Front Right Tyre Photo', image: frontTyreRightPhoto },
    { title: 'Rear Right Tyre Photo', image: rearTyreRightPhoto },
    { title: 'Disc Pad Rear Photo', image: discPadsFrontPhoto },
  ]

  const ImageController = ImageController1.filter(
    (item, index) => item.image !== ''
  )

  return (
    <View style={styles.headerContainer}>
      <View style={styles.group}>
        <View style={styles.left}>
          {ImageController[0] && (
            <View>
              <Text style={styles.title}>{ImageController[0].title}</Text>
              <Image src={ImageController[0].image} style={styles.image} />
            </View>
          )}

          {ImageController[2] && (
            <View>
              <Text style={styles.title}>{ImageController[2].title}</Text>
              <Image src={ImageController[2].image} style={styles.image} />
            </View>
          )}

          {ImageController[4] && (
            <View>
              <Text style={styles.title}>{ImageController[4].title}</Text>
              <Image src={ImageController[4].image} style={styles.image} />
            </View>
          )}

          {ImageController[6] && (
            <View>
              <Text style={styles.title}>{ImageController[6].title}</Text>
              <Image src={ImageController[6].image} style={styles.image} />
            </View>
          )}
        </View>
        <View style={styles.right}>
          {ImageController[1] && (
            <View>
              <Text style={styles.title}>{ImageController[1].title}</Text>
              <Image src={ImageController[1].image} style={styles.image} />
            </View>
          )}

          {ImageController[3] && (
            <View>
              <Text style={styles.title}>{ImageController[3].title}</Text>
              <Image src={ImageController[3].image} style={styles.image} />
            </View>
          )}

          {ImageController[5] && (
            <View>
              <Text style={styles.title}>{ImageController[5].title}</Text>
              <Image src={ImageController[5].image} style={styles.image} />
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
