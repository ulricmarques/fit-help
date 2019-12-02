import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";
import Colors from "../constants/Colors";

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
    alignItems: "center"
  },
  imageContainer: {
    marginTop: -50,
    width: 300,
    height: 300,
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
