import React from "react";
import { FlatList, StyleSheet, Platform, View } from "react-native";
import Colors from "../constants/Colors";
import { Icon, ListItem, SearchBar } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const list = [
  {
    pic: require("../assets/images/exercises/clean.png"),
    title: "Clean",
    date: "19/11/2019",
    weight: 20,
    repetitions: 20
  },
  {
    pic: require("../assets/images/exercises/deadlift.png"),
    title: "Deadlift",
    date: "19/11/2019",
    weight: 30,
    repetitions: 10
  },
  {
    pic: require("../assets/images/exercises/desenvolvimento.png"),
    title: "Desenvolvimento",
    date: "18/11/2019",
    weight: 25,
    repetitions: 15
  },
  {
    pic: require("../assets/images/exercises/dumbbell.png"),
    title: "Dumbbell",
    date: "18/11/2019",
    weight: 30,
    repetitions: 15
  },
  {
    pic: require("../assets/images/exercises/bench-dumbbell.png"),
    title: "Bench dumbbell",
    date: "18/11/2019",
    weight: 40,
    repetitions: 10
  },
  {
    pic: require("../assets/images/exercises/exercicio.png"),
    title: "Exercício",
    date: "16/11/2019",
    weight: 20,
    repetitions: 10
  },
  {
    pic: require("../assets/images/exercises/rosca.png"),
    title: "Rosca",
    date: "16/11/2019",
    weight: 20,
    repetitions: 10
  },
  {
    pic: require("../assets/images/exercises/supino.png"),
    title: "Supino",
    date: "15/11/2019",
    weight: 20,
    repetitions: 10
  },
  {
    pic: require("../assets/images/exercises/triceps.png"),
    title: "Triceps",
    date: "15/11/2019",
    weight: 20,
    repetitions: 10
  }
];

class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "Histórico",
    headerStyle: {
      backgroundColor: Colors.accent
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  state = {
    search: "",
    date: new Date("2020-06-12T14:42:42"),
    showDatePicker: false,
    selectedItem: {}
  };

  setDate = (event, date) => {
    this.setState({
      showDatePicker: Platform.OS === "ios" ? true : false,
      date
    });
  };

  showDatePicker = () => {
    this.setState({
      showDatePicker: true
    });
  };

  updateSearch = search => {
    this.setState({ search });
  };

  listItemPressed = () => {
    console.log("teste");
  };

  renderItem = ({ item, index }) => (
    <ListItem
      leftAvatar={{
        source: item.pic,
        rounded: false,
        size: 50,
        activeOpacity: 1,
        imageProps: { resizeMode: "center" },
        overlayContainerStyle: {
          backgroundColor: Colors.secondary,
          borderRadius: 10
        }
      }}
      title={item.title}
      subtitle={item.date}
      rightTitle={`${item.weight} kg`}
      rightSubtitle={`${item.repetitions} repetições`}
      bottomDivider
      rightTitleStyle={styles.rightTitleStyle}
      rightSubtitleStyle={styles.rightSubtitleStyle}
      containerStyle={styles.listItemContainer}
      onPress={() => {
        this.props.navigation.navigate("HistoryPerExercise", {
          selectedItem: item
        });
      }}
    />
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    const { search, date, showDatePicker } = this.state;

    return (
      <View style={styles.mainContainer}>
        <View>
          <SearchBar
            placeholder="Digite aqui..."
            searchIcon={{
              type: "material-community",
              name: "magnify",
              color: Colors.dark
            }}
            onChangeText={this.updateSearch}
            value={search}
            inputContainerStyle={styles.searchInput}
            leftIconContainerStyle={styles.inputIcon}
          />
          <Icon
            name="calendar"
            type="material-community"
            color={Colors.primary}
            size={40}
            containerStyle={styles.calendarIconContainer}
            onPress={this.showDatePicker}
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={this.setDate}
          />
        )}

        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.dark
  },
  searchInput: {
    position: "absolute",
    top: 20,
    left: 15,
    width: 300,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white"
  },
  inputIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    marginLeft: -1,
    borderRadius: 10
  },
  calendarIconContainer: {
    backgroundColor: Colors.dark,
    position: "absolute",
    top: 30,
    right: 15,
    width: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignContent: "center"
  },
  listContainer: {
    marginTop: 80,
    marginHorizontal: 20,
    marginBottom: 40
  },
  listItemContainer: {
    borderRadius: 10,
    marginBottom: 2,
    backgroundColor: Colors.info
  },
  rightTitleStyle: {
    color: Colors.primary,
    fontWeight: "bold"
  },
  rightSubtitleStyle: {
    color: Colors.accent
  }
});

export default HistoryScreen;
