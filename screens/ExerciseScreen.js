import React from "react";
import { Platform, View, StyleSheet, Vibration } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Button, Input, Tile } from "react-native-elements";
import { HomeScreenPics } from "../constants/Pics";
import { Accelerometer } from 'expo-sensors';

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49;

class ExerciseScreen extends React.Component {
  state = {
    defaultStartButtonText: "Iniciar",
    started: false,
    counter: 0,
    inputWeight: "",
    inputRepetitions: "",
    accelerometerData: {},
  };

  updateWeight = weight => {
    this.setState({ inputWeight: weight });
  };

  updateRepetitions = repetitions => {
    this.setState({ inputRepetitions: repetitions });
  };

  makeVibration() {
    Vibration.vibrate();
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  };

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
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
    const { inputWeight, inputRepetitions } = this.state;


    let { x, y, z } = this.state.accelerometerData;
    Accelerometer.setUpdateInterval(100);

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
            onChangeText={this.updateWeight}
            value={inputWeight}
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
            onChangeText={this.updateRepetitions}
            value={inputRepetitions}
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
          disabled={inputWeight.length > 0 && inputRepetitions.length > 0 ? false : true}
          icon={{
            name: "timer",
            type: "material-community",
            size: 40,
            color: "white"
          }}
          title={
            this.state.started
              ? `${contagem(y)} repetições`
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


var contador = 0;
var b = 0;
var a = 0;
var teste = 0;
function contagem(eixoy) {
  if (eixoy <= 0.3) {
    b = 1;
  }
  if (eixoy >= 0.8) {
    a = 1;
  }
  if (a == 1 && b == 1) {
    a = 0;
    b = 0;
    teste++;
  } if (teste == 2) {
    teste = 0;
    contador++;
    return contador;
  } else {
    return contador;
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
