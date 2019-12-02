import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { Icon, ListItem, Text, Tile } from "react-native-elements";

class HistoryPerExerciseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("selectedItem", "0").title} - ${
        navigation.getParam("selectedItem", "0").date
      } `,
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
    const pic = navigation.getParam("selectedItem", "0").pic;
    const weight = navigation.getParam("selectedItem", "0").weight;
    const repetitions = navigation.getParam("selectedItem", "0").repetitions;
    const calories = 100; //temporary

    const list = [
      {
        title: `${weight} kg`,
        icon: "dumbbell"
      },
      {
        title: `${repetitions} reps`,
        icon: "sync"
      },
      {
        title: `${calories} kcal`,
        icon: "water"
      }
    ];

    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Tile
            imageSrc={pic}
            imageProps={{ resizeMode: "center" }}
            activeOpacity={1}
            imageContainerStyle={styles.imageContainer}
          />

          <View style={styles.listContainer}>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{ color: "#FFF", fontWeight: "bold" }}
                leftIcon={{
                  name: item.icon,
                  size: 55,
                  color: "#FFF",
                  type: "material-community",
                  iconStyle: {
                    backgroundColor: Colors.primary,
                    borderRadius: 10,
                    marginLeft: -16
                  }
                }}
                bottomDivider
                containerStyle={styles.listItemContainer}
              />
            ))}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text h4 style={styles.progressionText}>
            Progressão
          </Text>
          <Text h5 style={styles.weightProgressionText}>
            Peso
          </Text>
          <Text h5 style={styles.timeProgressionText}>
            Tempo
          </Text>
          <Icon
            size={250}
            name="chart-line"
            type="material-community"
            color={Colors.accent}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark
  },
  topContainer: {
    backgroundColor: Colors.secondary,
    height: 255,
    borderRadius: 10,
    marginHorizontal: 10
  },
  bottomContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    height: 270,
    marginHorizontal: 10
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginLeft: 20
  },
  progressionText: {
    textAlign: "center"
  },
  weightProgressionText: {
    position: "absolute",
    top: 65,
    left: 40,
    fontWeight: "bold"
  },
  timeProgressionText: {
    position: "absolute",
    bottom: 10,
    right: 30,
    fontWeight: "bold"
  },
  listContainer: {
    position: "absolute",
    top: 35,
    right: 20
  },
  listItemContainer: {
    borderRadius: 10,
    marginBottom: 3,
    height: 59,
    width: 170,
    maxHeight: 59,
    maxWidth: 170,
    backgroundColor: Colors.accent
  }
});

export default HistoryPerExerciseScreen;
