import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
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
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Digite aqui..."
          onChangeText={this.updateSearch}
          value={search}
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
          marginTop={60}
          marginBottom={100}
          verticalSwipe={true}
          showSecondCard={true}
          stackSize={3} // number of cards shown in background
          stackSeparation={15}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B2021"
  }
});

export default HomeScreen;
