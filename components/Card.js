import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49;

export const Card = ({ pic, title }) => (
  <Tile
    imageSrc={pic}
    imageProps={{ resizeMode: "center" }}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={1}
    title={title}
    titleStyle={styles.title}
    containerStyle={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Colors.secondary,
    borderWidth: 2
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    color: Colors.dark,
    bottom: 30
  }
});
