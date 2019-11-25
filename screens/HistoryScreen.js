import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'

class HistoryScreen extends React.Component {

    static navigationOptions = {
        title: 'Histórico',
        headerStyle: {
          backgroundColor: Colors.accent
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      };
    
    render() {
        return (
            <View>
                <Text>History Screen</Text>
            </View>
        )
    }
}

export default HistoryScreen