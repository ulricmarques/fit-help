import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import Colors from '../constants/Colors'
import { Text, Icon, SearchBar } from 'react-native-elements'

class HomeScreen extends React.Component {

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
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
      return (
        <SafeAreaView style={styles.container}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Swiper
            cards={HomeScreenPics}
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