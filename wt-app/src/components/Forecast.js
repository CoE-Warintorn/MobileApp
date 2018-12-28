import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Forcast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.main}>{this.props.main}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Text style={styles.temp}>{this.props.temp} °C</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        color: 'white', 
        fontSize: 40, 
        textAlign: 'center',
        paddingTop: 10
    },
    description: {
        color: 'white', 
        fontSize: 20, 
        textAlign: 'center',
        paddingTop: 10
    },
    temp: {
        color: 'white', 
        fontSize: 30, 
        textAlign: 'center',
        paddingTop: 10
    }
  });