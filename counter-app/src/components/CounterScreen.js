import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Sentry from 'sentry-expo';

export default class CounterScreen extends React.Component {
    state = {
        count: 0
    };

    _add = (number) => {
        const count = this.state.count + number
        if (count > 33)
            throw new Error('count >= 33')

        this.setState({
            count
        })
    };

    _add10 = () => {
        Sentry.captureBreadcrumb({
            message: 'ADD 10',
            category: 'count',
            level: 'info',
            data: {
                count: this.state.count
            }
        })
        this._add(10)
    }

    _add1 = () => {
        Sentry.captureBreadcrumb({
            message: 'ADD 1',
            category: 'count',
            level: 'info',
            data: {
                count: this.state.count
            }
        })
        this._add(1)
    } 

    render() {
        return (
            <View>
                <Text style={styles.title}>Counter</Text>
                <Text style={styles.summation}>{this.state.count}</Text>
                <Button title='+10' onPress={this._add10}/>
                <Button title='+1' onPress={this._add1}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 50
    },
    summation: {
        padding: '10%',
        textAlign: 'center',
        fontSize: 80
    }
});