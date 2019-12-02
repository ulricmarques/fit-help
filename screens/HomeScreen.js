import React from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";
import Colors from "../constants/Colors";
import { SearchBar } from "react-native-elements";

class HomeScreen extends React.Component {
  state = {
    search: "",
    isVisible: false,
    cardIndex: 0
  };

  updateSearch = search => {
    this.setState({ search });
  };

  toExercise = index => {
    this.props.navigation.navigate("Exercise", {
      cardIndex: index
    });
  };

  static navigationOptions = {
    title: "Exercícios",
    headerStyle: {
      backgroundColor: Colors.accent
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Digite aqui..."
          onChangeText={this.updateSearch}
          value={search}
          searchIcon={{
            type: "material-community",
            name: "magnify",
            color: Colors.dark
          }}
          inputContainerStyle={styles.searchInput}
          leftIconContainerStyle={styles.inputIcon}
        />
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          cardIndex={this.state.cardIndex}
          cards={HomeScreenPics}
          onTapCard={this.toExercise}
          renderCard={Card}
          infinite
          backgroundColor={Colors.dark}
          cardHorizontalMargin={0}
          verticalSwipe={true}
          showSecondCard={true}
          stackSize={3} // number of cards shown in background
          stackSeparation={15}
          containerStyle={styles.swiperContainer}
          childrenOnTop={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    marginTop: -17
  },
  swiperContainer: {
    position: "absolute",
    marginTop: 100,
    maxHeight: 500
  },
  searchInput: {
    position: "absolute",
    top: 20,
    marginHorizontal: 15,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white"
  },
  inputIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    marginLeft: -1,
    borderRadius: 10
  }
});

export default HomeScreen;
