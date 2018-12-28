import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Home</Text>
                <Button title='Next' onPress={() => this.props.navigation.navigate('Counter')}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 50
    }
});