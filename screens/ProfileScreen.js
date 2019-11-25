import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../constants/Colors'

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Perfil',
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
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

export default ProfileScreen