import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // https://stackoverflow.com/a/50318831/6141587

export const Card = ({ pic, title, caption }) => (
    <Tile
      imageSrc={pic}
      imageContainerStyle={styles.imageContainer}
      activeOpacity={0.9}
      title={title}
      titleStyle={styles.title}
      containerStyle={styles.container}
    />
  )
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#1B2021',
    },
    imageContainer: {
      width: Layout.window.width - 100,
      height: Layout.window.height - BOTTOM_BAR_HEIGHT * 60,
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: '#BFFFB3'
    },
    title: {
      position: 'absolute',
      left: 30,
      bottom: 30,
    }
  })