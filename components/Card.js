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
        caption={caption}
        captionStyle={styles.caption}
        containerStyle={styles.container}
        featured
    />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: Layout.window.width - 80,
        height: Layout.window.height - BOTTOM_BAR_HEIGHT * 10,
        alignSelf: 'center',
        //backgroundColor: "#E5F9E2",
    },
    imageContainer: {
        width: Layout.window.width - 150,
        height: Layout.window.height - BOTTOM_BAR_HEIGHT * 13,
        borderRadius: 20,

        overflow: 'hidden', // this does magic
    },
    title: {
        position: 'absolute',
        left: 10,
        bottom: 30,
    },
    caption: {
        position: 'absolute',
        left: 10,
        bottom: 10,
    },
})