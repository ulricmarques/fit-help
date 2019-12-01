import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";

class ProfileSecondScreen extends React.Component {
  static navigationOptions = {
    title: "Perfil 2",
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
      <View>
        <Text>ProfileSecond Screen</Text>
      </View>
    );
  }
}

export default ProfileSecondScreen;
