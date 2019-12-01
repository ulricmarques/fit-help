import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Perfil",
    headerStyle: {
      backgroundColor: Colors.accent
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.dark
  }
});

export default ProfileScreen;
