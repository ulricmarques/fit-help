import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Button, Input, Tile } from "react-native-elements";
import { HomeScreenPics } from "../constants/Pics";

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49;

class ExerciseScreen extends React.Component {
  state = {
    defaultStartButtonText: "Iniciar",
    started: false,
    counter: 0
  };

  startCount = () => {
    this.setState({ started: true });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: HomeScreenPics[navigation.getParam("cardIndex", "0")].title,
      headerStyle: {
        backgroundColor: Colors.accent
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    const { navigation } = this.props;

    const exercisePic =
      HomeScreenPics[navigation.getParam("cardIndex", "0")].pic;

    const exerciseTitle =
      HomeScreenPics[navigation.getParam("cardIndex", "0")].title;
    return (
      <View style={styles.mainContainer}>
        <View>
          <Input
            placeholder="Peso (kg)"
            leftIcon={{
              type: "material-community",
              name: "dumbbell",
              color: "#FFF"
            }}
            inputContainerStyle={styles.weightInput}
            leftIconContainerStyle={styles.inputIcon}
          />
          <Input
            placeholder="Repetições"
            leftIcon={{
              type: "material-community",
              name: "sync",
              color: "#FFF"
            }}
            inputContainerStyle={styles.repetitionInput}
            leftIconContainerStyle={styles.inputIcon}
          />
        </View>

        <Tile
          imageSrc={exercisePic}
          imageProps={{ resizeMode: "center" }}
          imageContainerStyle={styles.imageContainer}
          activeOpacity={1}
          containerStyle={styles.container}
        />

        <Button
          icon={{
            name: "timer",
            type: "material-community",
            size: 40,
            color: "white"
          }}
          title={
            this.state.started
              ? `${this.state.counter} repetições`
              : this.state.defaultStartButtonText
          }
          buttonStyle={styles.startButton}
          iconContainerStyle={styles.startIcon}
          onPress={this.startCount}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.secondary
  },
  container: {
    alignItems: "center",
    marginTop: 100
  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Colors.secondary
  },
  weightInput: {
    position: "absolute",
    top: 20,
    left: 30,
    width: 170,
    borderWidth: 2,
    borderRadius: 10
  },
  repetitionInput: {
    position: "absolute",
    top: 20,
    right: 30,
    width: 170,
    borderRadius: 10,
    borderWidth: 2
  },
  inputIcon: {
    backgroundColor: Colors.accent,
    marginLeft: -1,
    width: 40,
    borderRadius: 10
  },
  startButton: {
    width: 170,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: Colors.primary
  },
  startIcon: {
    backgroundColor: Colors.accent,
    borderRadius: 10
  }
});

export default ExerciseScreen;
