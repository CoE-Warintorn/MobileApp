import React from 'react';
import Weather from './Weather';
import { StyleSheet ,Text, Button } from 'react-native';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text style={styles.header}>Weather</Text>),
            headerRight: (
                <Button title='Change zip' onPress={() => navigation.navigate('ZipCode')}/>
            )
        }
    }

    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (
            <Weather zipCode={zipCode}/>
        )
    }
}

const styles = StyleSheet.create({
    header:{ paddingLeft: 30 ,fontSize: 20 },
  });