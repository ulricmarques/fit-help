import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";

class HistoryPerExerciseScreen extends React.Component {
  static navigationOptions = {
    title: "Histórico por exercício",
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
        <Text>History Per Exercise Screen</Text>
      </View>
    );
  }
}

export default HistoryPerExerciseScreen;
