import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import Colors from '../constants/Colors'
import { Text, Icon, SearchBar, Overlay  } from 'react-native-elements'


class HomeScreen extends React.Component {

  state = {
    search: '',
    isVisible: false
  };
  
  updateSearch = search => {
    this.setState({ search });
  };

  showOverlay = () => {
    this.setState({ isVisible: true});
  };

  static navigationOptions = {
    title: 'Exercícios',
    headerStyle: {
      backgroundColor: Colors.accent
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

    render() {
      const { search } = this.state;

      <Overlay isVisible={this.state.isVisible}>
        <Text>Hello from Overlay!</Text>
      </Overlay>;

      {
        this.state.visible && (
          <Overlay isVisible>
            <Text>Hello from Overlay!</Text>
          </Overlay>
        );
      }

      <Overlay
        isVisible={this.state.isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>;

      <Overlay
        isVisible={this.state.isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>;
      return (
        <SafeAreaView style={styles.container}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Swiper
            cards={HomeScreenPics}
            onTapCard={this.showOverlay}
            renderCard={Card}
            infinite // keep looping cards infinitely
            backgroundColor="#1B2021"
            cardHorizontalMargin={0}
            marginBottom={30}
            verticalSwipe={false}
            showSecondCard={true}
            stackSize={2} // number of cards shown in background
          />
        </SafeAreaView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B2021',
    },
  })

export default HomeScreen